import { ShoppingCart, TrendingUp, BadgeCheck } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ShoppingIllustration, InvestmentIllustration } from './Illustrations';

const AssessmentsList = () => {

    const navigate = useNavigate();

    return (
        <section id="evaluaciones" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-mblue-500 text-sm font-semibold tracking-wider uppercase mb-3">Evaluaciones</p>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-600">Elige tu tipo de evaluación</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white flex flex-col rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                        <div className="bg-gradient-to-br from-navy-600/5 to-mblue-500/5 p-6 flex justify-center items-center h-44">
                            <ShoppingIllustration />
                        </div>
                        <div className="p-8 flex flex-col flex-auto">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy-600/5 mb-4">
                                <ShoppingCart className="h-6 w-6 text-navy-600" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-navy-600 mb-3">Chequeo de Compra Online</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                                Verifica la confiabilidad de una tienda online o red social antes de realizar una compra. Analizamos señales de riesgo para que no pierdas tu dinero.
                            </p>
                            <ul className="space-y-3 flex-auto mb-8">
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w-5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Identifica señales de alerta en la tienda</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w-5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Verifica métodos de pago seguros</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w--5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Evalúa la reputación del vendedor</span>
                                </li>
                            </ul>
                            <button onClick={() => navigate('/evaluaciones/compras', { viewTransition: true })} className="w-full bg-navy-600 text-white px-6 py-3 rounded-md hover:bg-navy-500 transition-colors flex items-center justify-center space-x-2 text-sm font-semibold">
                                <span>Comenzar evaluación</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
                        <div className="bg-gradient-to-br from-mblue-500/5 to-navy-600/5 p-6 flex justify-center items-center h-44">
                            <InvestmentIllustration />
                        </div>
                        <div className="p-8 flex flex-col flex-auto">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mblue-500/5 mb-4">
                                <TrendingUp className="h-6 w-6 text-mblue-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-navy-600 mb-3">Invierte con Menos Riesgo</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                                Evalúa si una plataforma de inversión o negocio financiero es legítimo. Verificamos su registro legal y prácticas en República Dominicana.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w-5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Verifica registro legal ante DGII</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w-5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Comprueba si está regulado por entidades oficiales</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <BadgeCheck className="h-5 w-5 text-mblue-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Obtén nuestra calificación de riesgo</span>
                                </li>
                            </ul>
                            <button onClick={() => navigate('/evaluaciones/inversiones', { viewTransition: true })} className="w-full bg-mblue-500 text-white px-6 py-3 rounded-md hover:bg-mblue-600 transition-colors flex items-center justify-center space-x-2 text-sm font-semibold">
                                <span>Comenzar evaluación</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AssessmentsList
