import { ShieldX, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { cn } from '../lib/utils';

const Header = ({ withoutNav = false }: { withoutNav?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b">
            <nav className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center", withoutNav ? "justify-center h-24" : "justify-between h-16")}>
                <div className="flex items-center space-x-2">
                    <ShieldX className="h-8 w-8 text-emerald-600" />
                    <Link to="/" className="text-xl font-bold text-gray-900" viewTransition>
                        CeroGanchos
                    </Link>
                </div>

                {!withoutNav && (
                    <>
                        {/* Botón de menú en mobile */}
                        <button 
                            className="lg:hidden text-gray-600 hover:text-gray-900"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        {/* Menú en desktop */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <a href="#evaluaciones" className="text-gray-600 hover:text-gray-900">Evaluaciones</a>
                            <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900">Características</a>
                            <a href="#como-funciona" className="text-gray-600 hover:text-gray-900">Cómo funciona</a>
                            <Link to="/evaluaciones" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                                Comienza ahora
                            </Link>
                        </div>

                        {/* Menú desplegable en mobile */}
                        {isOpen && (
                            <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden flex flex-col items-center space-y-4 py-4">
                                <a href="#evaluaciones" className="text-gray-600 hover:text-gray-900">Evaluaciones</a>
                                <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900">Características</a>
                                <a href="#como-funciona" className="text-gray-600 hover:text-gray-900">Cómo funciona</a>
                                <Link to="/evaluaciones" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                                    Comienza ahora
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
