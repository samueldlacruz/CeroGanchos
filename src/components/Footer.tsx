import { ShieldX } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-navy-600 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <ShieldX className="h-6 w-6 text-mblue-500" />
                        <span className="text-lg font-serif font-bold text-white">CeroGanchos</span>
                    </div>
                    <div className="text-sm md:mt-0 mt-4">
                        <nav className="flex space-x-6 mb-5">
                            <ul className="flex space-x-6">
                                <li><Link to="/terminos-y-condiciones" className="text-gray-400 hover:text-white transition-colors text-sm">Términos y condiciones</Link></li>
                                <li><Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidad</Link></li>
                            </ul>
                        </nav>
                        <span className="text-gray-500 text-sm">
                            © {year} CeroGanchos. Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
