import { Question } from "../interfaces/Question";

export const shoppingQuestions: Question[] = [
  {
    id: 1,
    text: "¿A través de qué medio harás la compra?",
    type: "select",
    category: "plataforma",
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
    category: "plataforma",
    tip: "Los dominios confiables usan extensiones como .com, .do, .org. Desconfía de dominios raros como .xyz, .tk o .ml.",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
    condition: (responses) => responses[1]?.slug === "pagina-web",
    weight: 2,
  },
  {
    id: 3,
    text: "Introduce la URL para verificar su seguridad:",
    type: "text",
    category: "plataforma",
    tip: "Copia y pega la URL completa. Incluye https:// si es posible.",
    condition: (responses) => responses[1]?.slug === "pagina-web",
    validate: (value) => value.startsWith("http"),
    weight: 3,
  },
  {
    id: 4,
    text: "¿La cuenta de la tienda está verificada en la red social?",
    type: "select",
    category: "plataforma",
    tip: "Una cuenta verificada tiene el check azul o gris. Las cuentas sin verificación pueden ser perfiles falsos creados recientemente.",
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
    category: "vendedor",
    tip: "Una tienda confiable tiene seguidores orgánicos y reseñas variadas. Desconfía de miles de seguidores con muy pocos likes o comentarios.",
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
    category: "vendedor",
    tip: "Ninguna tienda legítima te pedirá datos de tarjeta o cuenta bancaria por un formulario externo. Esto es una señal de fraude.",
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
    category: "vendedor",
    tip: "Los estafadores crean múltiples cuentas para alcanzar más víctimas. Si ves la misma tienda en varias cuentas, es una alerta roja.",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
    weight: 5,
  },
  {
    id: 8,
    text: "¿El precio es demasiado bueno para ser verdad? (Ejemplo: iPhone 15 Pro nuevo a mitad de precio).",
    type: "select",
    category: "vendedor",
    tip: "Si un precio es significativamente menor al mercado, probablemente es una trampa para atraer compradores desprevenidos.",
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
    category: "vendedor",
    tip: "Compara precios en tiendas conocidas como Amazon, Mercado Libre o tiendas oficiales de la marca.",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
    condition: (responses) => responses[8]?.slug === "no",
    weight: 3,
  },
  {
    id: 10,
    text: "¿La tienda tiene dirección física o datos de contacto verificables?",
    type: "select",
    category: "vendedor",
    tip: "Una tienda legítima tiene dirección física, teléfono y correo corporativo. Si solo tiene un número de WhatsApp, es sospechoso.",
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
    category: "vendedor",
    tip: "Las reseñas falsas suelen ser genéricas ('¡Muy bueno!', 'Lo recomiendo'). Las reas reales mencionan detalles específicos del producto.",
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
    category: "vendedor",
    tip: "Un vendedor legítimo responde preguntas sobre el producto, garantía y envío. Si evad la evades, es una mala señal.",
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
    category: "pago",
    tip: "Las transferencias bancarias son difíciles de reversar. Si solo aceptan transferencia, no tienes protección si el producto nunca llega.",
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
    category: "pago",
    tip: "Contra entrega significa que pagas solo cuando recibes el producto. Es una de las formas más seguras de comprar online.",
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
    category: "pago",
    tip: "Exigir pago total por adelantado es una práctica de riesgo. Los vendedores confiables ofrecen opciones parciales.",
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
    category: "producto",
    tip: "Una garantía clara indica confianza en el producto. Pregunta siempre por la política de devolución antes de comprar.",
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
    category: "producto",
    tip: "Un producto legítimo tiene descripción detallada: marca, modelo, especificaciones, material, dimensiones.",
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
    category: "producto",
    tip: "Las tiendas transparentes muestran costos de envío y tiempos de entrega antes de finalizar la compra.",
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
    category: "producto",
    tip: "Descripciones genéricas ('Telefono bonito, funciona bien') son una señal de que el vendedor no conoce el producto.",
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
    category: "producto",
    tip: "Puedes hacer clic derecho > 'Buscar imagen inversa' para verificar si las fotos son originales o robadas de internet.",
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
  "Busca reseñas en YouTube, foros o grupos de Facebook antes de comprar.",
  "Guarda capturas de pantalla de la tienda y los productos como prueba.",
  "Verifica si la tienda tiene política de devolución clara.",
  "Si algo parece demasiado bueno para ser verdad, probablemente lo es.",
];

export const investmentTips = [
  "Ninguna inversión legítima garantiza ganancias fijas y rápidas sin riesgo.",
  "Verifica siempre que la empresa esté regulada por una entidad oficial dominicana.",
  "Consulta el Registro Nacional de Contribuyentes (RNC) de la empresa antes de invertir.",
  "Investiga a los fundadores y su historial profesional antes de confiar tu dinero.",
  "No inviertas si te presionan a hacerlo rápido o sin explicaciones claras.",
  "Desconfía de las oportunidades que llegan por WhatsApp o Telegram no solicitadas.",
  "Pide estados financieros auditados antes de invertir en fondos o cooperativas.",
  "Una empresa legítima nunca te pedirá traer más inversores para que puedas cobrar.",
  "Verifica si la empresa está regulada por la SIMV, BVRD o la entidad correspondiente.",
  "Si no puedes explicar cómo genera ganancias el negocio, no inviertas.",
];

export const investmentQuestions: Question[] = [
  {
    id: 1,
    text: "¿Cuántos años en el país tiene la empresa?",
    type: "select",
    category: "empresa",
    tip: "Las empresas con menos de 1 año tienen mayor riesgo. Una trayectoria de 3+ años indica estabilidad.",
    weight: 5,
    options: [
      { label: "Menos de 1 año", slug: "one", score: 0 },
      { label: "1-3 años", slug: "one-three", score: 1 },
      { label: "Más de 3 años", slug: "more-three", score: 0 },
      { label: "No lo especifica", slug: "none", score: 0.5 },
    ],
  },
  {
    id: 2,
    text: "¿En qué periodo te promete que tendrás el 50% de tu inversión?",
    type: "select",
    category: "transparencia",
    tip: "Prometer 50% de ganancia en menos de 3 meses es una señal de esquema Ponzi o pirámide.",
    weight: 6,
    options: [
      { label: "Menos de 3 meses", slug: "three", score: 1 },
      { label: "3-6 meses", slug: "three-six", score: 0 },
      { label: "Más de 6 meses", slug: "more-six", score: 0 },
      { label: "No lo especifica", slug: "none", score: 0.5 },
    ],
  },
  {
    id: 3,
    text: "¿Prometen duplicar tu inversión en poco tiempo?",
    type: "select",
    category: "transparencia",
    tip: "Duplicar tu inversión es prácticamente imposible de forma legítima. Es la promesa clásica de las estafas piramidales.",
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
    category: "transparencia",
    tip: "Muchas estafas se copian entre países. Si el modelo existe como fraude en otro lugar, es sospechoso.",
    weight: 2,
    options: [
      { label: "Sí", slug: "yes", score: 1 },
      { label: "No", slug: "no", score: 0 },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
  },
  {
    id: 5,
    text: "¿Sabes cómo genera ganancias esta empresa?",
    type: "select",
    category: "transparencia",
    tip: "Si la empresa no puede explicar claramente de dónde salen las ganancias, es una señal de alerta.",
    weight: 2,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
  },
  {
    id: 6,
    text: "¿Publican informes financieros o estados de resultados?",
    type: "select",
    category: "transparencia",
    tip: "Las empresas serias publican sus estados financieros. La opacidad financiera es una bandera roja.",
    weight: 3,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
    condition: (responses) => responses[5]?.slug === "yes",
  },
  {
    id: 7,
    text: "¿Posee RNC (Registro Nacional de Contribuyentes)?",
    type: "select",
    category: "legalidad",
    tip: "Todo negocio legal en RD debe tener RNC. Puedes verificarlo en la DGII (dgii.gov.do).",
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
    category: "legalidad",
    tip: "Una oficina física indica compromiso y transparencia. Las empresas que solo operan por redes sociales son más difíciles de localizar.",
    options: [
      { score: 0, slug: "yes", label: "Oficinas físicas" },
      { score: 1, slug: "no", label: "Redes sociales" },
    ],
    weight: 4,
  },
  {
    id: 9,
    text: "¿Es necesario ir a una sucursal específica para retirar el dinero?",
    type: "select",
    category: "operaciones",
    tip: "Si te obligan a ir a un lugar específico para cobrar, puede ser una señal de que no hay liquidez real.",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
      { label: "No sé", slug: "idk", score: 0.5 },
    ],
    weight: 3,
    condition: (responses) => responses[8]?.slug === "yes",
  },
  {
    id: 10,
    text: "¿Este negocio tiene que ver con alguna de estas categorías?",
    type: "select",
    category: "empresa",
    tip: "Selecciona la categoría que mejor describa el negocio para que evaluemos la regulación específica.",
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
        label: "Venta o alquiler de dispositivos",
      },
      { score: 0, slug: "other", label: "Otro" },
    ],
  },
  {
    id: 11,
    text: "¿La empresa de apuestas deportivas está regularizada?",
    type: "select",
    category: "regulacion",
    tip: "Las apuestas deportivas en RD deben estar registradas ante la DGII y cumplir con la Ley 149-11.",
    weight: 7,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: [
      {
        label: "Consultar el RNC en DGII",
        url: "https://www.dgii.gov.do/app/WebApps/ConsultasWeb/consultas/rnc.aspx",
      },
    ],
    linkDescription:
      "Verifica si en su Registro Nacional de Contribuyentes (RNC) aparece como Apuestas deportivas.",
    condition: (responses) => responses[10]?.slug === "sports-betting",
  },
  {
    id: 12,
    text: "¿Conoces si estas inversiones están reguladas?",
    type: "select",
    category: "regulacion",
    tip: "Las inversiones en RD deben estar reguladas por la Superintendencia del Mercado de Valores (SIMV).",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://simv.gob.do/registro-del-mercado-de-valores/",
    linkDescription:
      "Verifica su registro en la Superintendencia del Mercado de Valores.",
    condition: (responses) => responses[10]?.slug === "investment",
  },
  {
    id: 13,
    text: "¿Conoces si este fondo de inversión está regulado?",
    type: "select",
    category: "regulacion",
    tip: "Los fondos de inversión en RD deben estar registrados en la Dirección General de Inversiones Extranjeras (REXI).",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://www.rexi.do/entidades/administradoras-de-fondos-de-inversion?p=1&ido=true&o=3",
    linkDescription:
      "Verifica si aparece en la lista de fondos de inversión regularizados.",
    condition: (responses) => responses[10]?.slug === "investment-fund",
  },
  {
    id: 14,
    text: "¿Conoces si estas cooperativas están regularizadas?",
    type: "select",
    category: "regulacion",
    tip: "Las cooperativas deben estar incorporadas ante el Instituto Dominicano de Cooperativas (IDECOOP).",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: "https://idecoop.gob.do/servicios/cooperativas-incorporadas-listado-general/",
    linkDescription:
      "Verifica si aparece en la lista de cooperativas regularizadas.",
    condition: (responses) => responses[10]?.slug === "cooperative",
  },
  {
    id: 15,
    text: "¿Existen restricciones para retirar fondos o dinero?",
    type: "select",
    category: "operaciones",
    tip: "Las inversiones legítimas permiten retiro sin restricciones excesivas. Si te bloquean el retiro, es una alerta roja.",
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
    text: "¿Conoces si este puesto de bolsa está autorizado?",
    type: "select",
    category: "regulacion",
    tip: "Los puestos de bolsa deben estar autorizados por la SIMV, la APB y la BVRD.",
    weight: 5,
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    link: [
      {
        label: "Asociación de Puestos de Bolsa (APB)",
        url: "https://www.apb.org.do/quienes-somos/",
      },
      {
        label: "Registro SIMV",
        url: "https://simv.gob.do/registro-del-mercado-de-valores/",
      },
      {
        label: "Puestos de bolsa de la BVRD",
        url: "https://bvrd.com.do/puestos-de-bolsa/",
      },
    ],
    linkDescription:
      "Verifica si aparece en la lista de puestos de bolsa autorizados.",
    condition: (responses) => responses[10]?.slug === "stock-exchange",
  },
  {
    id: 17,
    text: "¿Ofrecen factura o comprobante fiscal por cada venta/alquiler?",
    type: "select",
    category: "legalidad",
    tip: "Una empresa que no factura está operando en la informalidad. Las facturas son tu prueba de compra.",
    weight: 9,
    options: [
      { label: "Sí, siempre", score: 0, slug: "yes" },
      { label: "Solo en algunas ventas", score: 2, slug: "some-sales" },
      { label: "No", score: 5, slug: "no" },
    ],
    condition: (responses) => responses[10]?.slug === "rent-or-lease",
  },
  {
    id: 18,
    text: "¿Te invitan a unirte a un grupo en WhatsApp o Telegram?",
    type: "select",
    category: "operaciones",
    tip: "Los grupos de WhatsApp/Telegram son una táctica común de esquemas piramidales para crear presión social.",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 2,
    condition: (responses) => responses[10]?.slug !== "other",
  },
];

export const categoryLabels: Record<string, string> = {
  plataforma: "Plataforma",
  vendedor: "Vendedor",
  pago: "Pago",
  producto: "Producto",
  empresa: "Empresa",
  legalidad: "Legalidad",
  transparencia: "Transparencia",
  regulacion: "Regulación",
  operaciones: "Operaciones",
};

export const categoryIcons: Record<string, string> = {
  plataforma: "Globe",
  vendedor: "Store",
  pago: "CreditCard",
  producto: "Package",
  empresa: "Building2",
  legalidad: "Scale",
  transparencia: "Eye",
  regulacion: "ShieldCheck",
  operaciones: "Settings",
};

export const conceptDefinitions: Record<
  string,
  { title: string; definition: string }
> = {
  RNC: {
    title: "RNC - Registro Nacional de Contribuyentes",
    definition:
      "Número de identificación fiscal que toda empresa legalmente constituida en República Dominicana debe poseer. Se puede verificar en la DGII.",
  },
  DGII: {
    title: "DGII - Dirección General de Impuestos Internos",
    definition:
      "Entidad gubernamental encargada de administra los impuestos en RD. Allí puedes verificar el registro y estado de cualquier empresa.",
  },
  SIMV: {
    title: "SIMV - Superintendencia del Mercado de Valores",
    definition:
      "Entidad que regula y supervisa a las empresas que operan en el mercado de valores dominicano.",
  },
  APB: {
    title: "APB - Asociación de Puestos de Bolsa",
    definition:
      "Organización que agrupa a los puestos de bolsa autorizados en República Dominicana.",
  },
  BVRD: {
    title: "BVRD - Bolsa de Valores de la República Dominicana",
    definition:
      "El mercado oficial de valores del país. Las empresas autorizadas para operar aquí son reguladas y supervisadas.",
  },
  IDECOOP: {
    title: "IDECOOP - Instituto Dominicano de Cooperativas",
    definition:
      "Entidad gubernamental que regula e incorpora las cooperativas en República Dominicana.",
  },
  "contra entrega": {
    title: "Pago contra entrega",
    definition:
      "Modalidad de pago donde solo entregas el dinero cuando recibes el producto en tus manos. Es una de las formas más seguras de comprar online.",
  },
  "banca deportiva": {
    title: "Apuestas deportivas",
    definition:
      "Plataformas donde se realizan apuestas sobre eventos deportivos. En RD deben estar reguladas por la DGII.",
  },
  ponzi: {
    title: "Esquema Ponzi",
    definition:
      "Estafa financiera donde se pagan rendimientos a los inversores antiguos con el dinero de los nuevos, sin generar ganancias reales.",
  },
  piramide: {
    title: "Estafa piramidal",
    definition:
      "Esquema fraudulento donde los participantes ganan dinero reclutando nuevos miembros, no por la venta de productos o servicios legítimos.",
  },
};
