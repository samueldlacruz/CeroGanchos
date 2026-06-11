import { ShieldX, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { cn } from '../lib/utils';

const Header = ({ withoutNav = false }: { withoutNav?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-navy-600 shadow-lg">
            <nav className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center", withoutNav ? "justify-center h-24" : "justify-between h-16")}>
                <div className="flex items-center space-x-3">
                    <ShieldX className="h-7 w-7 text-mblue-500" />
                    <Link to="/" className="text-xl font-serif font-bold text-white tracking-tight" viewTransition>
                        CeroGanchos
                    </Link>
                </div>

                {!withoutNav && (
                    <>
                        <button
                            className="lg:hidden text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="#evaluaciones" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Evaluaciones</a>
                            <a href="#caracteristicas" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Características</a>
                            <a href="#como-funciona" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Cómo funciona</a>
                            <Link to="/evaluaciones" className="bg-mblue-500 font-semibold text-white px-5 py-2 rounded-md hover:bg-mblue-600 transition-colors text-sm">
                                Evaluar ahora
                            </Link>
                        </div>

                        {isOpen && (
                            <div className="absolute top-16 left-0 w-full bg-navy-700 shadow-xl lg:hidden flex flex-col items-center space-y-4 py-6 border-t border-navy-400">
                                <a href="#evaluaciones" className="text-gray-300 hover:text-white text-sm font-medium">Evaluaciones</a>
                                <a href="#caracteristicas" className="text-gray-300 hover:text-white text-sm font-medium">Características</a>
                                <a href="#como-funciona" className="text-gray-300 hover:text-white text-sm font-medium">Cómo funciona</a>
                                <Link to="/evaluaciones" className="bg-mblue-500 text-white px-5 py-2 rounded-md hover:bg-mblue-600 transition-colors text-sm font-semibold">
                                    Evaluar ahora
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
