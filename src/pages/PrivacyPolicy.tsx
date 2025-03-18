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
                <title>CeroGanchos | Evita Estafas, Evalúa Antes de Comprar o Invertir</title>
                <meta name="description" content="No vuelvas a caer en ganchos y pirámides. Nuestra plataforma te ayuda a identificar y prevenir estafas en compras online y negocios financieros." />
                <meta name="keywords" content="estafas, fraude online, compras seguras, inversiones seguras, negocios confiables" />

                <meta property="og:title" content="Evita Estafas | Evalúa Antes de Comprar o Invertir" />
                <meta property="og:description" content="Descubre si una tienda online o un negocio financiero es seguro antes de invertir o comprar. Protege tu dinero." />
                <meta property="og:url" content={baseURL} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Evita Estafas | Evalúa Antes de Comprar o Invertir" />
                <meta name="twitter:description" content="Nuestra plataforma te ayuda a prevenir estafas en tiendas online y negocios financieros." />
                <meta name="twitter:image" content="/assets/og-image.png" />
            </Helmet>

            <PageContainer>
                <Header withoutNav={true} />
                <main className="max-w-4xl mx-auto p-6 text-gray-800">
                    <h1 className="text-3xl font-bold text-center mb-6 bg-emerald-700 p-3 text-white">Política de Privacidad</h1>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">1. Información Recopilada</h2>
                        <p>Recopilamos información personal que los usuarios proporcionan al utilizar nuestros servicios, como nombre y correo electrónico.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">2. Uso de la Información</h2>
                        <p>Utilizamos la información recopilada para mejorar nuestros servicios, personalizar la experiencia del usuario y responder consultas.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">3. Protección de Datos</h2>
                        <p>Implementamos medidas de seguridad para proteger la información del usuario contra accesos no autorizados.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">4. Compartición de Información</h2>
                        <p>No compartimos la información personal del usuario con terceros sin su consentimiento, salvo en los casos exigidos por ley.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">5. Cookies y Tecnologías de Seguimiento</h2>
                        <p>Utilizamos cookies para mejorar la experiencia del usuario en el sitio web. Puede administrar sus preferencias en la configuración del navegador.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">6. Enlaces a Terceros</h2>
                        <p>Este sitio web puede contener enlaces a sitios externos. No nos hacemos responsables de sus políticas de privacidad.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">7. Derechos del Usuario</h2>
                        <p>El usuario tiene derecho a acceder, modificar o eliminar su información personal contactándonos en <a href="mailto:contacto@tuempresa.com" className="text-blue-600 hover:underline">contacto@tuempresa.com</a>.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">8. Cambios en la Política</h2>
                        <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán notificados en esta página.</p>
                    </section>
                </main>
                <Footer />
            </PageContainer>
        </Fragment>
    )
}

export default PrivacyPolicy