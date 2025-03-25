import { Question } from "../interfaces/Question";

export const shoppingQuestions: Question[] = [
  {
    id: 1,
    text: "¿A través de qué medio harás la compra?",
    type: "select",
    options: [
      { score: 0, slug: "pagina-web", label: "Página web" },
      { score: 0, slug: "Instagram", label: "Instagram" },
      { score: 0, slug: "Facebook", label: "Facebook" },
      { score: 0, slug: "Tiktok", label: "Tiktok" },
    ],
    weight: 0,
  },
  {
    id: 2,
    text: `¿El sitio tiene un dominio confiable o parece sospechoso? (Ejemplo: "tiendaoficial123.xyz")`,
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0 },
    ],
    condition: (responses) => responses[1]?.slug === "pagina-web",
    weight: 2,
  },
  {
    id: 3,
    text: "Introduce la URL para verificar su seguridad:",
    type: "text",
    condition: (responses) => responses[1]?.slug === "pagina-web",
    validate: (value) => value.startsWith("http"),
    weight: 3,
  },
  {
    id: 4,
    text: "¿La cuenta de la tienda está verificada en la red social?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) =>
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]?.slug),
    weight: 4,
  },
  {
    id: 5,
    text: "¿Tienen muchos seguidores y buenas reseñas?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) =>
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]?.slug),
    weight: 3,
  },
  {
    id: 6,
    text: "¿La tienda te pide ingresar un formulario donde te piden datos bancarios?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    condition: (responses) =>
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]?.slug),
    weight: 5,
  },
  {
    id: 7,
    text: "¿Existen varias cuentas con el mismo nombre y logo?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0 },
    ],
    weight: 5,
  },
  {
    id: 8,
    text: "¿El precio es demasiado bueno para ser verdad? (Ejemplo: iPhone 15 Pro nuevo a mitad de precio).",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 4,
  },
  {
    id: 9,
    text: "¿Otras tiendas confiables tienen precios similares o hay una gran diferencia?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0 },
    ],
    condition: (responses) => responses[8]?.slug === "no",
    weight: 3,
  },
  {
    id: 10,
    text: "¿La tienda tiene dirección física o datos de contacto verificables?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    weight: 4,
  },
  {
    id: 11,
    text: "¿Las opiniones de los clientes parecen reales o son comentarios genéricos/copypasteados?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Reales" },
      { score: 1, slug: "no", label: "Falsos" },
    ],
    weight: 4,
  },
  {
    id: 12,
    text: "¿El vendedor responde dudas claramente o evade respuestas?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Responde" },
      { score: 1, slug: "no", label: "Evade" },
    ],
    condition: (responses) => responses[11]?.slug === "no",
    weight: 3,
  },
  {
    id: 13,
    text: "¿Solo aceptan pagos en transferencias?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 5,
  },
  {
    id: 14,
    text: "¿Aceptan pago contra entrega?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) => responses[13]?.slug !== undefined,
    weight: 3,
  },
  {
    id: 15,
    text: "¿Exigen pagar el 100% por adelantado?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) => responses[13]?.slug === "yes",
    weight: 4,
  },
  {
    id: 16,
    text: "¿La tienda ofrece algún tipo de garantía sobre el producto?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    weight: 4,
  },
  {
    id: 17,
    text: "¿Los detalles del producto son claros y completos?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    weight: 3,
  },
  {
    id: 18,
    text: "¿Incluyen información sobre tiempo de envío y costos adicionales?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) => responses[17]?.slug === "no",
    weight: 3,
  },
  {
    id: 19,
    text: "¿La descripción es detallada o genérica?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Detallada" },
      { score: 1, slug: "no", label: "Genérica" },
    ],
    condition: (responses) => responses[17]?.slug === "no",
    weight: 3,
  },
  {
    id: 20,
    text: "¿Las imágenes del producto parecen propias o sacadas de Google?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Propias" },
      { score: 1, slug: "no", label: "De Google" },
    ],
    condition: (responses) => responses[17]?.slug === "no",
    weight: 3,
  },
];

export const shoppingTips = [
  "Compra solo en páginas con dominios confiables y oficiales.",
  "Verifica la URL y usa buscadores para confirmar su autenticidad.",
  "Nunca ingreses datos bancarios en sitios sospechosos.",
  "Desconfía de precios demasiado bajos y compara con otras tiendas.",
  "Prefiere métodos de pago seguros y evita transferencias sin respaldo.",
  "Si hay varias cuentas con el mismo nombre y logo, podría ser una estafa.",
];

export const investmentTips = [
  "Ninguna inversión legítima garantiza ganancias fijas y rápidas sin riesgo.",
  "Verifica siempre que la empresa esté regulada por una entidad oficial.",
  "Investiga a los fundadores y su historial antes de confiar tu dinero.",
  "No inviertas si te presionan a hacerlo rápido o sin explicaciones claras.",
  "Encontrar un buen experto en el mercado es importante.",
];

export const investmentQuestions: Question[] = [
  {
    id: 1,
    text: "¿Cuántos años en el país tiene la empresa?",
    type: "select",
    weight: 5,
    options: [
      { label: "Menos de 1 año", slug: "one", score: 0 },
      { label: "1-3 años", slug: "one-three", score: 1 },
      { label: "Más de 3 años", slug: "more-three", score: 0 },
      { label: "No lo especifica", slug: "none", score: 0 },
    ],
  },
  {
    id: 2,
    text: "¿En qué periodo te promete que tendrás el 50% de tu inversión?",
    type: "select",
    weight: 6,
    options: [
      { label: "Menos de 3 meses", slug: "three", score: 1 },
      { label: "3-6 meses", slug: "three-six", score: 0 },
      { label: "Más de 6 meses", slug: "more-six", score: 0 },
      { label: "No lo especifica", slug: "none", score: 0 },
    ],
  },
  {
    id: 3,
    text: "¿Prometen duplicar tu inversión en poco tiempo?",
    type: "select",
    weight: 5,
    options: [
      { label: "Sí", slug: "yes", score: 1 },
      { label: "No", slug: "no", score: 0 },
    ],
  },
  {
    id: 4,
    text: "¿Conoces si existe un negocio parecido a este en otro país?",
    type: "select",
    weight: 2,
    options: [
      { label: "Sí", slug: "yes", score: 1 },
      { label: "No", slug: "no", score: 0 },
      { label: "No se", slug: "idk", score: 0 },
    ],
  },
  {
    id: 5,
    text: "¿Sabes cómo genera ganancias esta empresa?",
    type: "select",
    weight: 2,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0 },
    ],
  },
  {
    id: 6,
    text: "¿Publican informes financieros o estados de resultados?",
    type: "select",
    weight: 3,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0 },
    ],
    condition: (responses) => responses[5]?.slug === "yes",
  },
  {
    id: 7,
    text: "¿Posee RNC?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://www.dgii.gov.do/app/WebApps/ConsultasWeb/consultas/rnc.aspx",
    linkDescription: "Consulta el RNC aquí",
    weight: 4,
  },
  {
    id: 8,
    text: "¿Operan desde oficinas físicas o solo por redes sociales?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Oficinas fisicas" },
      { score: 1, slug: "no", label: "Redes sociales" },
    ],
    weight: 4,
  },
  {
    id: 9,
    text: "¿Es necesario ir a una sucursal específica para retirar el dinero?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No se", slug: "idk", score: 0.5 },
    ],
    weight: 3,
    condition: (responses) => responses[8]?.slug === "yes",
  },
  {
    id: 10,
    text: "¿Este negocio tiene que ver con algunas de estas cosas?",
    type: "select",
    weight: 0,
    options: [
      { score: 0, slug: "sports-betting", label: "Apuestas deportivas" },
      { score: 0, slug: "investment", label: "Inversiones" },
      { score: 0, slug: "investment-fund", label: "Fondo de inversión" },
      { score: 0, slug: "cooperative", label: "Cooperativas" },
      { score: 0, slug: "stock-exchange", label: "Puesto de bolsa" },
      {
        score: 0,
        slug: "rent-or-lease",
        label: "Venda o alquiler de dipositivos",
      },
      { score: 0, slug: "other", label: "Otro" },
    ],
  },
  {
    id: 11,
    text: "¿La banca deportiva está regularizada?",
    type: "select",
    weight: 7,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: [
      {
        label: "Consultar el RNC",
        url: "https://www.dgii.gov.do/app/WebApps/ConsultasWeb/consultas/rnc.aspx",
      }
    ],
    linkDescription: "Consulta si en su Registro Nacional de Contribuyentes (RNC) aparece como Apuestas deportivas.",
    condition: (responses) => responses[10]?.slug === "sports-betting",
  },
  {
    id: 12,
    text: "¿Conoces si estas inversiones estan regularizada?",
    type: "select",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://simv.gob.do/registro-del-mercado-de-valores/",
    linkDescription:
      "¿Puedo verificar su registro en la web de la Superintendencia de Valores o Banco Central?, consulta la regulación aqui",
    condition: (responses) => responses[10]?.slug === "investment",
  },
  {
    id: 13,
    text: "¿Conoces si este fondo de inversión estan regularizada?",
    type: "select",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://www.rexi.do/entidades/administradoras-de-fondos-de-inversion?p=1&ido=true&o=3",
    linkDescription:
      "Verificar si aparece en esta lista de fondos de inversión regularizados, consulta la regulación aqui",
    condition: (responses) => responses[10]?.slug === "investment-fund",
  },
  {
    id: 14,
    text: "¿Conoces si estas cooperativas estan regularizadas?",
    type: "select",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://idecoop.gob.do/servicios/cooperativas-incorporadas-listado-general/",
    linkDescription:
      "Verificar si aparece en esta lista de cooperativas regularizadas, consulta la regulación aqui",
    condition: (responses) => responses[10]?.slug === "cooperative",
  },
  {
    id: 15,
    text: "¿Existen restricciones para retirar fondos o dinero?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 3,
    condition: (responses) =>
      ["investment", "investment-fund", "cooperative"].includes(
        responses[10]?.slug
      ),
  },
  {
    id: 16,
    text: "¿Conoces si este puesto de bolsa esta autorizado?",
    type: "select",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: [
      {
        label: "Asociados a la Asociación de Puestos de Bolsa (APB)",
        url: "https://www.apb.org.do/quienes-somos/",
      },
      {
        label:
          "Registro de empresas autorizadas de la Superintendencia del Mercado de Valores",
        url: "https://simv.gob.do/registro-del-mercado-de-valores/",
      },
      {
        label: "Puesto de bolsa de la Bolsa de la República Dominicana (BVRD)",
        url: "https://bvrd.com.do/puestos-de-bolsa/",
      },
    ],
    linkDescription:
      "Verifica si aparece en esta lista de puestos de bolsa autorizados, en los siguientes enlaces",
    condition: (responses) => responses[10]?.slug === "stock-exchange",
  },
  {
    id: 17,
    text: "¿Ofrecen factura o comprobante fiscal por cada venta/alquiler?",
    type: "select",
    weight: 9,
    options: [
      { label: "Sí", score: 5, slug: "yes" },
      { label: "Solo en algunas ventas", score: 3, slug: "some-sales" },
      { label: "No", score: 0, slug: "no" },
    ],
    condition: (responses) => responses[10]?.slug === "rent-or-lease",
  },
  {
    id: 18,
    text: "¿Te invitan a unirte a un grupo en Whatsapp o Telegram?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 2,
    condition: (responses) => responses[10]?.slug !== "other",
  }
];
