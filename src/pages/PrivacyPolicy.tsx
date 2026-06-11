import { Fragment } from "react"
import { baseURL } from "../config"
import { Helmet } from "react-helmet-async"
import PageContainer from "../components/PageContainer"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrivacyPolicy = () => {
    return (
        <Fragment>
            <Helmet>
                <title>CeroGanchos | Política de Privacidad</title>
                <meta name="description" content="Política de privacidad de CeroGanchos." />
                <meta name="keywords" content="privacidad, datos, CeroGanchos" />

                <meta property="og:title" content="Política de Privacidad | CeroGanchos" />
                <meta property="og:description" content="Política de privacidad de CeroGanchos." />
                <meta property="og:url" content={baseURL} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Política de Privacidad | CeroGanchos" />
                <meta name="twitter:description" content="Política de privacidad de CeroGanchos." />
                <meta name="twitter:image" content="/assets/og-image.png" />
            </Helmet>

            <PageContainer>
                <Header withoutNav={true} />
                <main className="max-w-4xl mx-auto p-6 text-gray-700">
                    <h1 className="text-3xl font-serif font-bold text-center mb-6 bg-navy-600 p-4 text-white">Política de Privacidad</h1>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">1. Información Recopilada</h2>
                        <p>Recopilamos información personal que los usuarios proporcionan al utilizar nuestros servicios, como nombre y correo electrónico.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">2. Uso de la Información</h2>
                        <p>Utilizamos la información recopilada para mejorar nuestros servicios, personalizar la experiencia del usuario y responder consultas.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">3. Protección de Datos</h2>
                        <p>Implementamos medidas de seguridad para proteger la información del usuario contra accesos no autorizados.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">4. Compartición de Información</h2>
                        <p>No compartimos la información personal del usuario con terceros sin su consentimiento, salvo en los casos exigidos por ley.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">5. Cookies y Tecnologías de Seguimiento</h2>
                        <p>Utilizamos cookies para mejorar la experiencia del usuario en el sitio web. Puede administrar sus preferencias en la configuración del navegador.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">6. Enlaces a Terceros</h2>
                        <p>Este sitio web puede contener enlaces a sitios externos. No nos hacemos responsables de sus políticas de privacidad.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">7. Derechos del Usuario</h2>
                        <p>El usuario tiene derecho a acceder, modificar o eliminar su información personal contactándonos en <a href="mailto:samueldlacg@gmail.com" className="text-mblue-500 hover:underline">samueldlacg@gmail.com</a>.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">8. Cambios en la Política</h2>
                        <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán notificados en esta página.</p>
                    </section>
                </main>
                <Footer />
            </PageContainer>
        </Fragment>
    )
}

export default PrivacyPolicy
