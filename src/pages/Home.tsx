import { BadgeCheck, BookOpenCheck, LineChart, ShieldCheck } from 'lucide-react';
import AssessmentsList from '../components/AssessmentsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    return (
        <PageContainer>
            {/* Hero Section */}
            <Header />

            <main>
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            No Vuelvas a Caer en Ganchos y Pirámides
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Nuestra plataforma te ayuda a identificar y prevenir estafas financieras que se disfrazan de grande oportunidades.
                        </p>
                    </div>
                </section>

                {/* Assessment Types Section */}
                <AssessmentsList />

                {/* Features Section */}
                <section id="caracteristicas" className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué usar CeroGanchos?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <LineChart className="h-12 w-12 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Análisis inteligente</h3>
                                <p className="text-gray-600">Atraves de un analisis inteligente de nuestros formularios te ayudamos a evaluar la seguridad de tu inversión.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <ShieldCheck className="h-12 w-12 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Seguro</h3>
                                <p className="text-gray-600">Te ayudamos a evaluar la seguridad de tu inversión, negocio o compra para evitar engaños.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <BadgeCheck className="h-12 w-12 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Consejos y fuentes oficiales </h3>
                                <p className="text-gray-600">En cada paso del formulario te brindamos enlaces de páginas e instituciones donde puedes comprobar si la empresa está avalada legalmente. y uno que otro consejo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section id="como-funciona" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                                    alt="Financial Planning"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <BookOpenCheck className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Elige tu evaluación</h3>
                                        <p className="text-gray-600">Seleccione la evaluación de Invierte con Menos Riesgo
                                            O Chequeo de Compra Online según sus necesidades.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <LineChart className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Obtenga un análisis detallado</h3>
                                        <p className="text-gray-600">Reciba información completa y consejos a tomar en cuenta sobre esa compra o empresa que puede ser fraudulenta.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-2 rounded-full">
                                        <BadgeCheck className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Decide qué hacer</h3>
                                        <p className="text-gray-600">Obtenga nuestra calificación sobre la inversión o compra y decide cuál será tu próximo paso.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-emerald-600 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            ¿Estás Listo para Invertir y Comprar con un Poco Más de Seguridad?
                        </h2>
                        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Elige tu tipo de evaluación y da el primer paso hacía invertir con más seguridad
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => navigate("/evaluaciones/compras")} className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition">
                                Chequeo de Compra Online
                            </button>
                            <button onClick={() => navigate("/evaluaciones/inversiones")} className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition">
                                Invierte con Menos Riesgo
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </PageContainer>
    )
}

export default Home