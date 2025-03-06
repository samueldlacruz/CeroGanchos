import { ShieldX } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 py-12" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <ShieldX className="h-6 w-6 text-emerald-600" />
                        <span className="text-lg font-semibold text-gray-900">CeroGanchos</span>
                    </div>
                    <div className="text-sm text-gray-600">
                        © {year} CeroGanchos. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer