import { Fragment } from "react"
import { baseURL } from "../config"
import { Helmet } from "react-helmet-async"
import PageContainer from "../components/PageContainer"
import Header from "../components/Header"
import { Link } from "react-router"
import Footer from "../components/Footer"

const TermsAndConditions = () => {
  return (
    <Fragment>
      <Helmet>
        <title>CeroGanchos | Términos y Condiciones</title>
        <meta name="description" content="Términos y condiciones de uso de CeroGanchos." />
        <meta name="keywords" content="términos, condiciones, CeroGanchos" />

        <meta property="og:title" content="Términos y Condiciones | CeroGanchos" />
        <meta property="og:description" content="Términos y condiciones de uso de CeroGanchos." />
        <meta property="og:url" content={baseURL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Términos y Condiciones | CeroGanchos" />
        <meta name="twitter:description" content="Términos y condiciones de uso de CeroGanchos." />
        <meta name="twitter:image" content="/assets/og-image.png" />
      </Helmet>

      <PageContainer>
        <Header withoutNav={true} />
        <main className="max-w-4xl mx-auto p-6 text-gray-700">
          <h1 className="text-3xl font-serif font-bold text-center mb-6 bg-navy-600 p-4 text-white">Términos y Condiciones</h1>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar este sitio web, el usuario acepta cumplir con estos Términos y Condiciones y con nuestra Política de Privacidad.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">2. Descripción del Servicio</h2>
            <ul className="list-disc list-inside">
              <li><strong>Evaluación "Invierte con Menos Riesgo":</strong> Verifica si una tienda en línea es viable y segura.</li>
              <li><strong>Evaluación "Chequeo de Compra Online":</strong> Permite evaluar si un negocio financiero es confiable.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">3. Uso Permitido</h2>
            <p>El usuario se compromete a usar el servicio de manera legítima y acorde con las leyes aplicables.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">4. Responsabilidad del Usuario</h2>
            <p>El usuario es responsable de las decisiones tomadas en base a nuestras evaluaciones.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">5. Limitación de Responsabilidad</h2>
            <p>No garantizamos la precisión total de las evaluaciones y no nos hacemos responsables de daños derivados de su uso.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">6. Propiedad Intelectual</h2>
            <p>Todo el contenido del sitio es propiedad de <Link to="">Samuel De la Cruz G</Link> y está protegido por leyes de propiedad intelectual.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">7. Privacidad y Protección de Datos</h2>
            <p>El usuario acepta nuestra <a href="/politica-de-privacidad" className="text-mblue-500 hover:underline">Política de Privacidad</a>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">8. Enlaces a Terceros</h2>
            <p>No nos hacemos responsables del contenido de sitios externos enlazados.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">9. Modificaciones de los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">10. Terminación</h2>
            <p>Podemos suspender el acceso al sitio si se violan estos términos.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">11. Ley Aplicable</h2>
            <p>Estos términos se rigen por las leyes de República Dominicana.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-serif font-semibold mb-2 text-navy-600">12. Contacto</h2>
            <p>Para dudas, contáctanos en <a href="mailto:samueldlacg@gmail.com" className="text-mblue-500 hover:underline">samueldlacg@gmail.com</a>.</p>
          </section>
        </main>
        <Footer />
      </PageContainer>
    </Fragment>
  )
}

export default TermsAndConditions