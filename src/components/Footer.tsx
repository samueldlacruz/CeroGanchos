import { ShieldX } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 py-12" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <ShieldX className="h-6 w-6 text-emerald-600" />
                        <span className="text-lg font-semibold text-gray-900">CeroGanchos</span>
                    </div>
                    <div className="text-sm text-gray-600 md:mt-0 mt-2">
                        <nav className="flex space-x-4 mb-5">
                            <ul>
                                <li className="hover:underline text-blue-600"><Link to="/terminos-y-condiciones">Términos y condiciones</Link></li>
                                <li className="hover:underline text-blue-600"><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
                            </ul>
                        </nav>
                        <span>
                            © {year} CeroGanchos. Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer