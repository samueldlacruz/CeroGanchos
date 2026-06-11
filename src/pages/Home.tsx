import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import AssessmentsList from '../components/AssessmentsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import ConceptDefinitions from '../components/ConceptDefinitions';
import { baseURL } from '../config';
import { AnalysisIllustration, SecurityIllustration, SourcesIllustration, StepSelectIllustration, StepAnswerIllustration, StepResultIllustration, HeroShieldIllustration } from '../components/Illustrations';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Helmet>
                <title>CeroGanchos | Evalúa Antes de Comprar o Invertir</title>
                <meta name="description" content="Protege tus decisiones financieras con datos. Evaluamos riesgos en compras online e inversiones para que tomes decisiones informadas." />
                <meta name="keywords" content="estafas, fraude online, compras seguras, inversiones seguras, negocios confiables" />

                <meta property="og:title" content="CeroGanchos | Evalúa Antes de Comprar o Invertir" />
                <meta property="og:description" content="Evalúa el riesgo de compras online e inversiones antes de comprometer tu dinero. Datos claros, decisiones seguras." />
                <meta property="og:url" content={baseURL} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CeroGanchos | Evalúa Antes de Comprar o Invertir" />
                <meta name="twitter:description" content="Evalúa el riesgo de compras online e inversiones antes de comprometer tu dinero." />
                <meta name="twitter:image" content="/assets/og-image.png" />
            </Helmet>

            <PageContainer>
                <Header />

                <main>
                    {/* Hero Section */}
                    <section className="relative bg-navy-600 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-navy-500 to-navy-700" />
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="text-left">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                        Toma decisiones financieras con la información que mereces
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                                        Evaluamos riesgos en compras online e inversiones en <span className="text-white font-medium">República Dominicana</span> para que no pierdas tu dinero. Análisis claro, resultados accionables.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => navigate("/evaluaciones/compras")}
                                            className="bg-white text-navy-600 font-semibold px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
                                        >
                                            Chequeo de Compra
                                        </button>
                                        <button
                                            onClick={() => navigate("/evaluaciones/inversiones")}
                                            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm"
                                        >
                                            Evaluar Inversión
                                        </button>
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-center">
                                    <div className="w-72 h-72 opacity-80">
                                        <HeroShieldIllustration />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Assessment Types Section */}
                    <AssessmentsList />

                    {/* Features Section */}
                    <section id="caracteristicas" className="bg-gray-50 py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <p className="text-mblue-500 text-sm font-semibold tracking-wider uppercase mb-3">Nuestro enfoque</p>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600">¿Por qué CeroGanchos?</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-10">
                                <div className="text-center p-8 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-center mb-5">
                                        <AnalysisIllustration />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-navy-600 mb-3">Análisis fundamentado</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">Cada evaluación se basa en criterios objetivos y fuentes oficiales para darte un panorama claro del riesgo.</p>
                                </div>
                                <div className="text-center p-8 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-center mb-5">
                                        <SecurityIllustration />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-navy-600 mb-3">Verificación rigurosa</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">Cruzamos información con registros públicos y entidades gubernamentales para validar la legalidad de cada empresa.</p>
                                </div>
                                <div className="text-center p-8 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-center mb-5">
                                        <SourcesIllustration />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-navy-600 mb-3">Decisiones con contexto</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">No solo identificamos riesgos: te proporcionamos enlaces a fuentes oficiales y consejos accionables para proteger tu dinero.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How it Works Section */}
                    <section id="como-funciona" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <p className="text-mblue-500 text-sm font-semibold tracking-wider uppercase mb-3">Metodología</p>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-600">Cómo funciona</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50">
                                    <div className="w-24 h-24 mx-auto mb-5">
                                        <StepSelectIllustration />
                                    </div>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-600 text-white font-serif font-bold text-lg mb-4 mx-auto">1</div>
                                    <h3 className="text-lg font-serif font-bold text-navy-600 mb-3">Selecciona tu evaluación</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Elige entre nuestro chequeo de compra online o la evaluación de inversión según lo que necesites verificar.</p>
                                </div>
                                <div className="text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50">
                                    <div className="w-24 h-24 mx-auto mb-5">
                                        <StepAnswerIllustration />
                                    </div>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-600 text-white font-serif font-bold text-lg mb-4 mx-auto">2</div>
                                    <h3 className="text-lg font-serif font-bold text-navy-600 mb-3">Responde preguntas clave</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Nuestro formulario analiza factores críticos: verificación legal, historial, modelos de negocio y prácticas comerciales.</p>
                                </div>
                                <div className="text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50">
                                    <div className="w-24 h-24 mx-auto mb-5">
                                        <StepResultIllustration />
                                    </div>
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy-600 text-white font-serif font-bold text-lg mb-4 mx-auto">3</div>
                                    <h3 className="text-lg font-serif font-bold text-navy-600 mb-3">Obtén tu calificación</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Recibe un puntaje de riesgo detallado con una calificación clara y recomendaciones para tu próxima acción.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-navy-600 py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                                No arriesgues tu dinero a ciegas
                            </h2>
                            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                                Evalúa el riesgo antes de comprometer tu dinero. Es rápido, gratuito y verifica con fuentes oficiales de <span className="text-white font-medium">República Dominicana</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => navigate("/evaluaciones/compras")}
                                    className="bg-white text-navy-600 font-semibold px-8 py-3.5 rounded-md hover:bg-gray-100 transition-colors text-sm"
                                >
                                    Chequeo de Compra
                                </button>
                                <button
                                    onClick={() => navigate("/evaluaciones/inversiones")}
                                    className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors text-sm"
                                >
                                    Evaluar Inversión
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Concept Definitions */}
                    <ConceptDefinitions />
                </main>

                <Footer />
            </PageContainer>
        </Fragment>
    )
}

export default Home
