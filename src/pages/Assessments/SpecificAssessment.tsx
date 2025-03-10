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

  const investmentQuestions: Question[] = [
    {
      id: 1,
      text: "¿Cuántos años en el país tiene la empresa?",
      type: "number",
    },
    {
      id: 2,
      text: "¿En qué periodo te promete que tendrás el 50% de tu inversión?",
      type: "select",
      options: ["2 meses", "4 meses", "6 meses", "Otro"],
    },
    {
      id: 3,
      text: "¿En qué periodo te promete que tendrás el 100% de tu inversión?",
      type: "select",
      options: ["2 meses", "4 meses", "6 meses", "Otro"],
    },
    {
      id: 4,
      text: "¿Te promete que te darán el doble de lo que inviertas?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 5,
      text: "¿Conoces si existe un negocio parecido a este en otro país?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 6,
      text: "¿Sabes cómo genera ganancias esta empresa?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 7,
      text: "¿Cómo exactamente obtienen ingresos?",
      type: "text",
      condition: (responses) => responses[6] === "Sí",
    },
    {
      id: 8,
      text: "¿Publican informes financieros o estados de resultados?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[6] === "Sí",
    },
    {
      id: 9,
      text: "¿Cómo explican su rentabilidad?",
      type: "text",
      condition: (responses) => responses[6] === "Sí",
    },
    {
      id: 10,
      text: "¿Garantizan rendimientos fijos?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 11,
      text: "¿Posee RNC?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://www.dgii.gov.do/app/WebApps/ConsultasWeb/consultas/rnc.aspx",
      linkDescription: "Consulta el RNC aquí",
    },
    {
      id: 12,
      text: "¿Tienen oficinas físicas o solo operan por redes sociales?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 13,
      text: "¿Sabes cómo funcionan los depósitos y retiros?",
      type: "select",
      options: ["Sí", "No"],
    },
    {
      id: 14,
      text: "¿Tienen límites para retirar fondos?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[13] === "Sí",
    },
    {
      id: 15,
      text: "¿Es necesario ir a una sucursal específica para retirar el dinero?",
      type: "select",
      options: ["Sí", "No"],
      condition: (responses) => responses[13] === "Sí",
    },
    {
      id: 16,
      text: "¿Este negocio tiene que ver con algunas de estas cosas?",
      type: "select",
      options: ["Apuestas deportivas", "Inversiones", "Fondo de inversión", "Cooperativas", "Puesto de bolsa", "Venda o alquiler de dipositivos", "Otro"],
    },
    {
      id: 17,
      text: "¿Conoces si está banca deportiva esta regularizada?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://loterianacional.gob.do/Listadoregularizacion/bancas_deportivas",
      linkDescription: "Consulta la regulación aquí",
      condition: (responses) => responses[16] === "Apuestas deportivas",
    },
    {
      id: 18,
      text: "¿Conoces si estas inversiones estan regularizada?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://simv.gob.do/registro-del-mercado-de-valores/",
      linkDescription: "¿Puedo verificar su registro en la web de la Superintendencia de Valores o Banco Central?, consulta la regulación aqui",
      condition: (responses) => responses[16] === "Inversiones",
    },
    {
      id: 19,
      text: "¿Conoces si este fondo de inversión estan regularizada?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://www.rexi.do/entidades/administradoras-de-fondos-de-inversion?p=1&ido=true&o=3",
      linkDescription: "Verificar si aparece en esta lista de fondos de inversión regularizados, consulta la regulación aqui",
      condition: (responses) => responses[16] === "Fondo de inversión",
    },
    {
      id: 20,
      text: "¿Conoces si estas cooperativas estan regularizadas?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://idecoop.gob.do/servicios/cooperativas-incorporadas-listado-general/",
      linkDescription: "Verificar si aparece en esta lista de cooperativas regularizadas, consulta la regulación aqui",
      condition: (responses) => responses[16] === "Cooperativas",
    },
    {
      id: 21,
      text: "¿Conoces si este puesto de bolsa esta asociado a la Asociación de Puestos de Bolsa de la República Dominicana?",
      type: "select",
      options: ["Sí", "No"],
      link: "https://apb.org.do/quienes-somos/",
      linkDescription: "Verifica si aparece en la parte de asociados de la Asociación de Puestos de Bolsa, consulta aqui",
      condition: (responses) => responses[16] === "Puesto de bolsa",
    }
  ];


  const questionsByTopic: Record<string, Question[]> = {
    "compras": shoppingQuestions,
    "inversiones": investmentQuestions,
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