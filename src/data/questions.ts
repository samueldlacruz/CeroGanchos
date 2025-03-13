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
    ],
    condition: (responses) => responses[1] === "pagina-web",
    weight: 4,
  },
  {
    id: 3,
    text: "Introduce la URL para verificar su seguridad:",
    type: "text",
    condition: (responses) => responses[1] === "pagina-web",
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
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]),
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
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]),
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
      ["Instagram", "Facebook", "Tiktok"].includes(responses[1]),
    weight: 5,
  },
  {
    id: 7,
    text: "¿Existen varias cuentas con el mismo nombre y logo?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
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
    ],
    condition: (responses) => responses[8] === "no",
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
    condition: (responses) => responses[11] === "no",
    weight: 3,
  },
  {
    id: 13,
    text: "¿Solo aceptan pagos en efectivo, transferencias sin factura o criptomonedas?",
    type: "select",
    options: [
      { score: 1, slug: "yes", label: "Sí" },
      { score: 0, slug: "no", label: "No" },
    ],
    weight: 5,
  },
  {
    id: 14,
    text: "¿No aceptan pago contra entrega?",
    type: "select",
    options: [
      { score: 0, slug: "yes", label: "Sí" },
      { score: 1, slug: "no", label: "No" },
    ],
    condition: (responses) => responses[13] === "yes",
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
    condition: (responses) => responses[13] === "yes",
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
    condition: (responses) => responses[17] === "no",
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
    condition: (responses) => responses[17] === "no",
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
    condition: (responses) => responses[17] === "no",
    weight: 3,
  },
];

export const shoppingTips = [
  "Compra solo en páginas con dominios confiables y oficiales.",
  "Verifica la URL y usa buscadores para confirmar su autenticidad.",
  "Nunca ingreses datos bancarios en sitios sospechosos.",
  "Desconfía de precios demasiado bajos y compara con otras tiendas.",
  "Prefiere métodos de pago seguros y evita transferencias sin respaldo.",
  "Si hay varias cuentas con el mismo nombre y logo, podría ser una estafa."
]


export const investmentQuestions: Question[] = [
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
    options: [
      "Apuestas deportivas",
      "Inversiones",
      "Fondo de inversión",
      "Cooperativas",
      "Puesto de bolsa",
      "Venda o alquiler de dipositivos",
      "Otro",
    ],
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
    linkDescription:
      "¿Puedo verificar su registro en la web de la Superintendencia de Valores o Banco Central?, consulta la regulación aqui",
    condition: (responses) => responses[16] === "Inversiones",
  },
  {
    id: 19,
    text: "¿Conoces si este fondo de inversión estan regularizada?",
    type: "select",
    options: ["Sí", "No"],
    link: "https://www.rexi.do/entidades/administradoras-de-fondos-de-inversion?p=1&ido=true&o=3",
    linkDescription:
      "Verificar si aparece en esta lista de fondos de inversión regularizados, consulta la regulación aqui",
    condition: (responses) => responses[16] === "Fondo de inversión",
  },
  {
    id: 20,
    text: "¿Conoces si estas cooperativas estan regularizadas?",
    type: "select",
    options: ["Sí", "No"],
    link: "https://idecoop.gob.do/servicios/cooperativas-incorporadas-listado-general/",
    linkDescription:
      "Verificar si aparece en esta lista de cooperativas regularizadas, consulta la regulación aqui",
    condition: (responses) => responses[16] === "Cooperativas",
  },
  {
    id: 21,
    text: "¿Conoces si este puesto de bolsa esta asociado a la Asociación de Puestos de Bolsa de la República Dominicana?",
    type: "select",
    options: ["Sí", "No"],
    link: "https://apb.org.do/quienes-somos/",
    linkDescription:
      "Verifica si aparece en la parte de asociados de la Asociación de Puestos de Bolsa, consulta aqui",
    condition: (responses) => responses[16] === "Puesto de bolsa",
  },
];

export const investmentScores: Record<string, number> = {
  Sí: 1,
  No: 0,
  Reales: 1,
  Falsos: 0,
  Responde: 1,
  Evade: 0,
};
