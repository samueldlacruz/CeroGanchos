import { ArrowRight, BadgeCheck, ShoppingCart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';

const AssessmentsList = () => {

    const navigate = useNavigate();

    return (
        <section id="evaluaciones" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Nuestras evaluaciones</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl shadow-lg border border-emerald-100">
                        <div className="bg-white p-3 rounded-full w-fit mb-6">
                            <ShoppingCart className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Chequeo de Compra Online</h3>
                        <p className="text-gray-600 mb-6">
                            ¿Quieres hacer una compra por internet o por esa página de Instagram que tiene una oferta llamativa?
                            Verifica que tan real puede ser esa oferta o pagina donde quieres comprar.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                                <span>Analiza los riesgos</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                                <span>Ahorra tu dinero</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                                <span>Verifica que tan confiable es la empresa</span>
                            </li>
                        </ul>
                        <button onClick={() => navigate('/evaluaciones/compras', { viewTransition: true })} className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center space-x-2">
                            <span>Comienza a Depurar esa Pagina</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100">
                        <div className="bg-white p-3 rounded-full w-fit mb-6">
                            <TrendingUp className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Invierte con Menos Riesgo</h3>
                        <p className="text-gray-600 mb-6">
                            Evita caer en vueltas, pirámides y estafas de cualquier tipo; Confirma si dicha empresa o plataforma es confiable al momento de invertir
                            y confirma si está avalada en <strong>República Dominicana.</strong>
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-blue-600" />
                                <span>Verifica que tan confiable es la empresa</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-blue-600" />
                                <span>Chequea si dicha empresa está avalada en el pais</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BadgeCheck className="h-5 w-5 text-blue-600" />
                                <span>Obtén nuestra calificación sobre que tan fraudulenta es</span>
                            </li>
                        </ul>
                        <button onClick={() => navigate('/evaluaciones/inversiones', { viewTransition: true })} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                            <span>Obtén nuestra calificación</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AssessmentsList