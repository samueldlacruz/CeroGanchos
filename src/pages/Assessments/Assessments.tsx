import { Fragment } from "react"
import AssessmentsList from "../../components/AssessmentsList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PageContainer from "../../components/PageContainer"
import { Helmet } from "react-helmet-async"

const Assessments = () => {
    const baseURL = import.meta.env.VITE_SITE_URL;

    return (
        <Fragment>
            <Helmet>
                <title>Realiza tu Evaluación | Compras Seguras e Inversiones Confiables</title>
                <meta name="description" content="Accede a nuestras evaluaciones para verificar la seguridad de tiendas online y negocios financieros antes de invertir o comprar." />
                <meta name="keywords" content="evaluación de tiendas, análisis de inversiones, compras seguras, estafas online, fraude financiero" />

                <meta property="og:title" content="Realiza tu Evaluación | Compras Seguras e Inversiones Confiables" />
                <meta property="og:description" content="Verifica si una tienda online o un negocio financiero es seguro antes de arriesgar tu dinero." />
                <meta property="og:url" content={`${baseURL}/evaluaciones`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Realiza tu Evaluación | Compras Seguras e Inversiones Confiables" />
                <meta name="twitter:description" content="Evalúa la seguridad de tiendas online y negocios financieros antes de comprar o invertir." />
                <meta name="twitter:image" content="/assets/og-image.png" />
            </Helmet>

            <PageContainer>
                <Header withoutNav />
                <main className="h-full bg-gray-100">
                    <AssessmentsList />
                </main>
                <Footer />
            </PageContainer>
        </Fragment>
    )
}

export default Assessments