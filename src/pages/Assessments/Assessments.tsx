import { Fragment } from "react"
import AssessmentsList from "../../components/AssessmentsList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PageContainer from "../../components/PageContainer"
import { Helmet } from "react-helmet-async"
import { baseURL } from "../../config"

const Assessments = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Evaluaciones | CeroGanchos</title>
                <meta name="description" content="Accede a nuestras evaluaciones para verificar la seguridad de compras online y negocios financieros antes de invertir." />
                <meta name="keywords" content="evaluación de tiendas, análisis de inversiones, compras seguras, estafas online, fraude financiero" />

                <meta property="og:title" content="Evaluaciones | CeroGanchos" />
                <meta property="og:description" content="Verifica si una compra o inversión es segura antes de arriesgar tu dinero." />
                <meta property="og:url" content={`${baseURL}/evaluaciones`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Evaluaciones | CeroGanchos" />
                <meta name="twitter:description" content="Evalúa la seguridad de compras online y negocios financieros." />
                <meta name="twitter:image" content="/assets/og-image.png" />
            </Helmet>

            <PageContainer>
                <Header withoutNav />
                <main className="h-full bg-gray-50">
                    <AssessmentsList />
                </main>
                <Footer />
            </PageContainer>
        </Fragment>
    )
}

export default Assessments
