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
        <Header />
        <main className="max-w-4xl mx-auto p-6 text-gray-800">
          <h1 className="text-3xl font-bold text-center mb-6">Términos y Condiciones</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar este sitio web, el usuario acepta cumplir con estos Términos y Condiciones y con nuestra Política de Privacidad.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Descripción del Servicio</h2>
            <ul className="list-disc list-inside">
              <li><strong>Evaluación "Invierte con Menos Riesgo":</strong> Verifica si una tienda en línea es viable y segura.</li>
              <li><strong>Evaluación "Chequeo de Compra Online":</strong> Permite evaluar si un negocio financiero es confiable.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Uso Permitido</h2>
            <p>El usuario se compromete a usar el servicio de manera legítima y acorde con las leyes aplicables.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Responsabilidad del Usuario</h2>
            <p>El usuario es responsable de las decisiones tomadas en base a nuestras evaluaciones.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Limitación de Responsabilidad</h2>
            <p>No garantizamos la precisión total de las evaluaciones y no nos hacemos responsables de daños derivados de su uso.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Propiedad Intelectual</h2>
            <p>Todo el contenido del sitio es propiedad de <Link to="">Samuel De la Cruz G</Link> y está protegido por leyes de propiedad intelectual.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Privacidad y Protección de Datos</h2>
            <p>El usuario acepta nuestra <a href="/privacy-policy" className="text-blue-600 hover:underline">Política de Privacidad</a>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Enlaces a Terceros</h2>
            <p>No nos hacemos responsables del contenido de sitios externos enlazados.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. Modificaciones de los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Terminación</h2>
            <p>Podemos suspender el acceso al sitio si se violan estos términos.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">11. Ley Aplicable</h2>
            <p>Estos términos se rigen por las leyes de República Dominicana.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">12. Contacto</h2>
            <p>Para dudas, contáctanos en <a href="malito:samueldlacg@gmail.com" className="text-blue-600 hover:underline">CeroGancho Correo</a>.</p>
          </section>
        </main>
        <Footer />
      </PageContainer>
    </Fragment>
  )
}

export default TermsAndConditions