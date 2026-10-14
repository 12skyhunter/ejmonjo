/**
 * data.js - EJ Monjo
 * Fuente única de datos desacoplada para todo el sitio web.
 * Permite actualizar textos, proyectos, maderas y teléfonos sin tocar el código HTML.
 */

// Información general de contacto y empresa
const currentYear = new Date().getFullYear();

const CONTACT_INFO = {
  brandName: "EJ Monjo Carpintería",
  tagline: "Carpintería Fina en Ahualulco",
  phonePrimary: "33 1175 7837",
  phoneSecondary: "386 105 6316",
  phoneRaw: "523311757837",
  address: "Zona Centro, Ahualulco de Mercado, Jalisco.",
  city: "Ahualulco de Mercado, Jalisco",
  hoursWeekday: "8:00 am a 7:00 PM",
  hoursSaturday: "8:00 am a 2:00 PM",
  email: "contacto@carpinteriaahualulco.mx",
  year: currentYear,
  copyrightText: `Sitio en desarrollo por Sistella - Todos los derechos reservados ${currentYear}`,
  sistellaUrl: "https://sistella.com.mx/sitio-web"
};

// Generador de enlaces inteligentes de WhatsApp
function getWhatsAppUrl(message = "", sku = "") {
  let text = message;
  if (!text) {
    text = "Hola EJ Monjo, me gustaría pedir información y cotizar una pieza de carpintería.";
  } else if (sku) {
    text = `${message} (SKU: ${sku})\n\nLink: https://lab.sistella.com.mx/ejmonjo/portafolio?id=${sku}`;
  }
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

// Proyectos del Portafolio (Galería fotográfica y especificaciones)
const PORTFOLIO_ITEMS = [
  {
    id: "POR-001",
    title: "Puerta de madera contemporánea",
    category: "Puertas",
    woodType: "Estilo Moderno",
    description: "Puerta de madera con diseño de listones horizontales y acabado natural, equipada con tirador y cerradura metálica de diseño contemporáneo.",
    detailedStory: "Puerta de madera con diseño de listones horizontales y acabado natural, equipada con tirador y cerradura metálica de diseño contemporáneo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/puertas_ahualulco_12.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero y sellado protector",
      "Diseño a medida residencial",
      "Instalación profesional"
    ],
    dimensions: "Dimensiones bajo especificación",
    location: "Jalisco, México"
  },
  {
    id: "POR-002",
    title: "Puerta principal de madera y vidrio",
    category: "Puertas",
    woodType: "Estilo Moderno",
    description: "Puerta moderna de diseño geométrico con paneles de vidrio y madera natural, con manija cilíndrica de acero inoxidable.",
    detailedStory: "Puerta moderna de diseño geométrico con paneles de vidrio y madera natural, con manija cilíndrica de acero inoxidable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/puertas_ahualulco_13.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero y sellado protector",
      "Diseño a medida residencial",
      "Instalación profesional"
    ],
    dimensions: "Dimensiones bajo especificación",
    location: "Jalisco, México"
  },
  {
    id: "POR-003",
    title: "Puerta exterior de estilo clásico",
    category: "Puertas",
    woodType: "Estilo Moderno",
    description: "Puerta de madera oscura con marco moldurado y tirador metálico, instalada sobre vano con acabado rústico en muro claro.",
    detailedStory: "Puerta de madera oscura con marco moldurado y tirador metálico, instalada sobre vano con acabado rústico en muro claro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/puertas_ahualulco_3.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero y sellado protector",
      "Diseño a medida residencial",
      "Instalación profesional"
    ],
    dimensions: "Dimensiones bajo especificación",
    location: "Jalisco, México"
  },
  {
    id: "POR-004",
    title: "Puerta de madera con paneles de vidrio",
    category: "Puertas",
    woodType: "Estilo Moderno",
    description: "Puerta de exterior elaborada en madera con acabado cálido y dos secciones acristaladas verticales que permiten el paso de luz natural.",
    detailedStory: "Puerta de exterior elaborada en madera con acabado cálido y dos secciones acristaladas verticales que permiten el paso de luz natural. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/puertas_ahualulco_4.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero y sellado protector",
      "Diseño a medida residencial",
      "Instalación profesional"
    ],
    dimensions: "Dimensiones bajo especificación",
    location: "Jalisco, México"
  },
  {
    id: "POR-005",
    title: "Puerta moderna con vidrio y forja",
    category: "Puertas",
    woodType: "Estilo Moderno",
    description: "Puerta de ingreso fabricada en madera natural con herrería decorativa y panel de vidrio central, tirador tubular metálico vertical.",
    detailedStory: "Puerta de ingreso fabricada en madera natural con herrería decorativa y panel de vidrio central, tirador tubular metálico vertical. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/puertas_ahualulco_5.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero y sellado protector",
      "Diseño a medida residencial",
      "Instalación profesional"
    ],
    dimensions: "Dimensiones bajo especificación",
    location: "Jalisco, México"
  },
  {
    id: "POR-006",
    title: "Cocina integral con isla",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Cocina moderna con gabinetes superiores blancos, módulos inferiores en acabado madera natural e isla central con cubierta de granito blanco.",
    detailedStory: "Cocina moderna con gabinetes superiores blancos, módulos inferiores en acabado madera natural e isla central con cubierta de granito blanco. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_12.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  },
  {
    id: "POR-007",
    title: "Cocina integral de madera clara",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Cocina integral con frentes y gabinetes en chapa de madera tono miel, tiradores metálicos empotrados y cubiertas de piedra natural.",
    detailedStory: "Cocina integral con frentes y gabinetes en chapa de madera tono miel, tiradores metálicos empotrados y cubiertas de piedra natural. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_19.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  },
  {
    id: "POR-008",
    title: "Cocina contemporánea en tono caoba",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Cocina residencial con módulos altos y bajos en tono cálido caoba, alacenas acristaladas e iluminación ambiental integrada.",
    detailedStory: "Cocina residencial con módulos altos y bajos en tono cálido caoba, alacenas acristaladas e iluminación ambiental integrada. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_21.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  },
  {
    id: "POR-009",
    title: "Cocina minimalista de líneas puras",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Cocina integral de concepto contemporáneo con frentes limpios sin tirador a la vista, combinando vetas horizontales con cubiertas sólidas.",
    detailedStory: "Cocina integral de concepto contemporáneo con frentes limpios sin tirador a la vista, combinando vetas horizontales con cubiertas sólidas. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_30.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  },
  {
    id: "POR-010",
    title: "Cocina de alta gama con barra desayunadora",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Amoblamiento de cocina con acabados de primera calidad, distribución ergonómica y barra perimetral para convivencia familiar.",
    detailedStory: "Amoblamiento de cocina con acabados de primera calidad, distribución ergonómica y barra perimetral para convivencia familiar. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_5.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  },
  {
    id: "POR-011",
    title: "Cocina residencial a medida",
    category: "Cocinas",
    woodType: "Madera Premium",
    description: "Cocina integral con amplios cajones organizadores, alacenas superiores de fácil apertura y encimeras de gran durabilidad.",
    detailedStory: "Cocina integral con amplios cajones organizadores, alacenas superiores de fácil apertura y encimeras de gran durabilidad. Fabricación artesanal adaptada a los requerimientos específicos del cliente, optimizando espacios y aportando calidez arquitectónica.",
    image: "/ejmonjo/assets/portafolio/cocinas_ahualulco_9.webp",
    aspectRatio: "aspect-[4/3]",
    features: [
      "Acabado duradero de alta resistencia",
      "Diseño a medida y herrajes de cierre suave",
      "Instalación profesional garantizada"
    ],
    dimensions: "Proyecto integral a la medida",
    location: "Jalisco, México"
  }
];

// Maderas Macizas (Muestrario de Muebles a la Medida)
const SOLID_WOODS = [
  {
    id: "nogal",
    name: "1. Nogal",
    type: "Madera Maciza",
    image: "/ejmonjo/assets/materiales/ejmonjo-nogal.webp",
    whatIs: "Una de las maderas nobles más apreciadas a nivel mundial por su tono café chocolate profundo y vetas sofisticadas.",
    advantages: "Acabado de lujo natural, alta durabilidad y excelente estabilidad con el paso del tiempo.",
    idealFor: "Muebles de autor, comedores ejecutivos, credenzas y proyectos prémium.",
    cost: "⭐⭐⭐⭐⭐ (5/5)",
    costNum: "5 / 5"
  },
  {
    id: "parota",
    name: "2. Parota",
    type: "Madera Maciza",
    image: "/ejmonjo/assets/materiales/ejmonjo-parota.webp",
    whatIs: "Madera tropical mexicana famosa por su contraste natural: tonos dorados/café al centro y orillas claras (albura).",
    advantages: "Vetas llamativas y orgánicas, excelente resistencia natural a plagas y gran presencia visual en piezas grandes.",
    idealFor: "Mesas de comedor de una sola pieza (live edge), barras de cocina y cubiertas protagónicas.",
    cost: "⭐⭐⭐⭐☆ (4/5)",
    costNum: "4 / 5"
  },
  {
    id: "rosa-morada",
    name: "3. Rosa Morada",
    type: "Madera Maciza",
    image: "/ejmonjo/assets/materiales/ejmonjo-rosa-morada.webp",
    whatIs: "Madera nativa fina con tonos cálidos que van del beige al miel, con una apariencia muy similar al roble o fresno.",
    advantages: "Gran equilibrio entre dureza, resistencia y elegancia visual; se adapta muy bien tanto a estilos clásicos como contemporáneos.",
    idealFor: "Puertas principales, recámaras completas, sillas y carpintería residencial de uso rudo.",
    cost: "⭐⭐⭐☆☆ (3.5/5)",
    costNum: "3.5 / 5"
  },
  {
    id: "haya",
    name: "4. Haya",
    type: "Madera Maciza",
    image: "/ejmonjo/assets/materiales/ejmonjo-haya.webp",
    whatIs: "Madera dura europea de tono claro y uniforme, caracterizada por un grano fino y discreto sin vetas invasivas.",
    advantages: "Superficie suave, altamente resistente a golpes e impactos; ideal para acabados limpios y de estilo nórdico/minimalista.",
    idealFor: "Sillería, muebles infantiles, libreros modernos y piezas con curvas o torneados.",
    cost: "⭐⭐⭐⭐☆ (4/5)",
    costNum: "4 / 5"
  }
];

// Tableros de Ingeniería (Muestrario de Muebles a la Medida)
const ENGINEERED_BOARDS = [
  {
    id: "melamina",
    name: "5. Melamina",
    type: "Tablero de Ingeniería",
    image: "/ejmonjo/assets/materiales/ejmonjo-melamina.webp",
    whatIs: "Tablero rígido recubierto por una película decorativa sintética con texturas o colores sólidos.",
    advantages: "Superficie fácil de limpiar, no requiere barniz, altamente resistente a rayaduras ligeras y con la mejor relación costo-beneficio.",
    idealFor: "Interiores de clósets, muebles de oficina, gabinetes de cocina y organizadores.",
    cost: "⭐☆☆☆☆ (1.5/5)",
    costNum: "1.5 / 5"
  },
  {
    id: "mdf-nogal",
    name: "6. MDF Enchapado en Nogal",
    type: "Tablero de Ingeniería",
    image: "/ejmonjo/assets/materiales/ejmonjo-MDF-ENCHAPADO-NOGAL.webp",
    whatIs: "Tablero de alta densidad cubierto en su superficie por una lámina delgada de madera real de nogal.",
    advantages: "Ofrece la vista, textura y calidez del nogal auténtico, pero sobre una base completamente plana y estable que no se tuerce.",
    idealFor: "Puertas de clóset, paneles decorativos de pared, frentes de cajón y centros de entretenimiento.",
    cost: "⭐⭐⭐☆☆ (3/5)",
    costNum: "3 / 5"
  },
  {
    id: "liston",
    name: "7. Listón de Madera (Tablero Enlistonado)",
    type: "Tablero de Ingeniería",
    image: "/ejmonjo/assets/materiales/ejmonjo-liston.webp",
    whatIs: "Tablero formado por un núcleo de bloques de madera sólida unidos lado a lado y sellados por ambas caras.",
    advantages: "Mucho más ligero y rígido que el MDF; soporta gran peso a lo largo sin pandearse ni doblarse.",
    idealFor: "Entrepaños largos para libreros, repisas de gran carga y puertas altas de clóset.",
    cost: "⭐⭐⭐☆☆ (3/5)",
    costNum: "3 / 5"
  },
  {
    id: "triplay",
    name: "8. Triplay / Multiplay (Caobilla)",
    type: "Tablero de Ingeniería",
    image: "/ejmonjo/assets/materiales/ejmonjo-triplay-caobilla.webp",
    whatIs: "Tablero fabricado mediante capas delgadas de madera cruzadas a presión, con cara exterior de madera de caobilla.",
    advantages: "Excepcional resistencia mecánica, excelente retención para tornillos y gran tolerancia a la flexión y humedad moderada.",
    idealFor: "Fondos de cajón reforzados, estructuras internas, muebles utilitarios y carpintería bajo cubierta.",
    cost: "⭐⭐☆☆☆ (2.5/5)",
    costNum: "2.5 / 5"
  }
];

// Pasos del proceso artesanal
const PROCESS_STEPS = [
  {
    number: "1",
    title: "1. Consulta Inicial y Medición",
    description: "Entendemos tus necesidades, dimensiones exactas del espacio y seleccionamos juntos la madera adecuada.",
    details: [
      "Entrevista sobre estilo, uso y funcionalidad",
      "Muestrario físico de maderas y acabados",
      "Dimensionamiento y cotización formal"
    ]
  },
  {
    number: "2",
    title: "2. Fabricación e Instalación",
    description: "Nuestros maestros carpinteros trabajan la madera combinando técnicas tradicionales de ensamble con acabados finos.",
    details: [
      "Madera estufada con porcentaje de humedad controlado",
      "Ensambles tradicionales de máxima durabilidad",
      "Instalación limpia y ajuste final en sitio"
    ]
  }
];
