import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageContainer from '../../components/PageContainer'
import InteractiveForm from '../../components/InteractiveForm'
import { Question } from '../../interfaces/Question'
import { useParams } from 'react-router'

const SpecificAssessment = () => {
  const { topic } = useParams()

  const shoppingQuestions: Question[] = [
    { id: 1, text: "¿Porque medio es?", type: "select", options: ["Pagina web", "Instagram", "Facebook", "Tiktok"] },
    {
      id: 2,
      text: `¿El sitio tiene un dominio oficial o es una página sospechosa (ejemplo: "tiendaoficial123.xyz")?`,
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[1] === "Pagina web"
    },
    {
      id: 3,
      text: "Introduce la URL para verificar su seguridad:",
      type: "text",
      condition: (responses) => responses[1] === "Pagina web"
    },
    {
      id: 4,
      text: "¿Esta verificada la red social?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => ["Instagram", "Facebook", "Tiktok"].includes(responses[1])
    },
    {
      id: 5,
      text: "¿Tienen muchos seguidores y buenas reseñas?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => ["Instagram", "Facebook", "Tiktok"].includes(responses[1])
    },
    {
      id: 7,
      text: "¿Es una oferta o un concurso?",
      type: "select",
      options: ["Oferta", "Concurso"],
      condition: (responses) => ["Instagram", "Facebook", "Tiktok"].includes(responses[1])
    },
    {
      id: 8,
      text: "¿Te pide que entres a otra página web o te muestra un formulario donde tienes que poner una tarjeta de crédito?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => ["Instagram", "Facebook", "Tiktok"].includes(responses[1])
    },
    {
      id: 9,
      text: "¿Existe mas de una pagina con el nombre similiar y el logo de esta empresa?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => ["Instagram", "Facebook", "Tiktok"].includes(responses[1])
    },
    {
      id: 10,
      text: "¿Existe más de una página con un nombre similar y el logo de esta empresa?",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 11,
      text: "¿El precio es demasiado bueno para ser verdad? (ejemplo: iPhone 15 Pro nuevo a mitad de precio).",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 12,
      text: "¿Otras tiendas confiables tienen precios similares o hay una gran diferencia?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[11] === "Sí"
    },
    {
      id: 13,
      text: "¿Tienen dirección física o información de contacto clara?",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 14,
      text: "¿Hay opiniones de clientes reales o parecen comentarios falsos/copypasteados?",
      type: "select",
      options: ["Reales", "Falsos"]
    },
    {
      id: 15,
      text: "¿El vendedor responde preguntas o evade respuestas importantes?",
      type: "select",
      options: ["Responde", "Evade"],
      condition: (responses) => responses[14] === "Falsos"
    },
    {
      id: 16,
      text: "¿Solo aceptan pagos en efectivo, transferencias directas sin factura o criptomonedas?",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 17,
      text: "¿No poseen la opción de pago contra entrega?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[16] === "Sí"
    },
    {
      id: 18,
      text: "¿Es necesario depositar el 100% del producto antes de comprar?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[16] === "Sí"
    },
    {
      id: 19,
      text: "¿Ofrecen algún tipo de garantía sobre el producto?",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 20,
      text: "¿Los detalles del producto son claros y completos?",
      type: "select",
      options: ["Sí", "No"]
    },
    {
      id: 21,
      text: "¿Incluyen información sobre el tiempo de envío y costos adicionales?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[20] === "No"
    },
    {
      id: 22,
      text: "¿La descripción es detallada o genérica?",
      type: "select",
      options: ["Detallada", "Genérica"],
      condition: (responses) => responses[20] === "No"
    },
    {
      id: 23,
      text: "¿Las imágenes son propias o sacadas de Google?",
      type: "select",
      options: ["Propias", "De Google"],
      condition: (responses) => responses[20] === "No"
    }
  ];

  const questionsByTopic: Record<string, Question[]> = {
    "compras": shoppingQuestions,
    // "inversiones": ,
  };



  return (
    <PageContainer>
      <Header withoutNav={true} />
      <main className="h-full">
        {topic && <InteractiveForm questions={questionsByTopic[topic]} />}
      </main>
      <Footer />
    </PageContainer>
  )
}

export default SpecificAssessment