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
    "id": "COCINA-01-D",
    "title": "Cocina integral contemporánea de estética monocromática",
    "category": "Cocinas",
    "woodType": "Melamina o laca negro mate",
    "description": "Cocina integral contemporánea de estética monocromática, con frentes lisos en negro mate y una isla central con cubierta de cuarzo blanco con caída en cascada.",
    "detailedStory": "Cocina integral contemporánea de estética monocromática, con frentes lisos en negro mate y una isla central con cubierta de cuarzo blanco con caída en cascada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-01_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina o laca negro mate",
      "Cubierta de cuarzo blanco en cascada",
      "Salpicadera de cuarzo o porcelanato blanco",
      "Paleta: Negro mate, Blanco, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-02-D",
    "title": "Cocina integral de diseño moderno",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo, isla central con barra de madera de nogal y elegantes cubiertas de cuarzo veteado.",
    "detailedStory": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo, isla central con barra de madera de nogal y elegantes cubiertas de cuarzo veteado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-02_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Melamina blanca de alto brillo",
      "Cubierta de cuarzo con vetas",
      "Paleta: Blanco, Nogal, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-03-D",
    "title": "Cocina en proceso de acabado",
    "category": "Cocinas",
    "woodType": "Madera pintada en blanco",
    "description": "Cocina en proceso de acabado con gabinetes blancos de estilo clásico y una imponente cubierta negra con vetas, complementada con iluminación colgante.",
    "detailedStory": "Cocina en proceso de acabado con gabinetes blancos de estilo clásico y una imponente cubierta negra con vetas, complementada con iluminación colgante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-03_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada en blanco",
      "Cubierta de granito o cuarzo negro con vetas",
      "Herrajes metálicos",
      "Paleta: Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-04-D",
    "title": "Cocina moderna con gabinetes oscuros en contraste con una elegante isla central de cuarzo blanco veteado y detalles en herrajes dorados",
    "category": "Cocinas",
    "woodType": "Madera teñida oscura",
    "description": "Cocina moderna con gabinetes oscuros en contraste con una elegante isla central de cuarzo blanco veteado y detalles en herrajes dorados.",
    "detailedStory": "Cocina moderna con gabinetes oscuros en contraste con una elegante isla central de cuarzo blanco veteado y detalles en herrajes dorados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-04_d.webp",
    "isFeatured": true,
    "features": [
      "Madera teñida oscura",
      "Cubierta de cuarzo blanco con vetas",
      "Herrajes metálicos dorados",
      "Paleta: Negro carbón, Blanco, Dorado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-05-D",
    "title": "Amplia cocina de diseño clásico contemporáneo en tonos blancos",
    "category": "Cocinas",
    "woodType": "Madera pintada de blanco",
    "description": "Amplia cocina de diseño clásico contemporáneo en tonos blancos con isla central, cubierta de granito oscuro y detalles integrados de alta gama.",
    "detailedStory": "Amplia cocina de diseño clásico contemporáneo en tonos blancos con isla central, cubierta de granito oscuro y detalles integrados de alta gama. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-05_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada de blanco",
      "Cubierta de granito oscuro",
      "Piso de madera de ingeniería",
      "Paleta: Blanco, Gris oscuro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-06-D",
    "title": "Cocina integral de diseño contemporáneo en madera de nogal",
    "category": "Cocinas",
    "woodType": "Madera de nogal texturizada",
    "description": "Cocina integral de diseño contemporáneo en madera de nogal con isla central y cubiertas de cuarzo blanco veteado, acompañada de lambrín decorativo vertical.",
    "detailedStory": "Cocina integral de diseño contemporáneo en madera de nogal con isla central y cubiertas de cuarzo blanco veteado, acompañada de lambrín decorativo vertical. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-06_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal texturizada",
      "Cubierta de cuarzo blanco con vetas oscuras",
      "Herrajes de acero inoxidable",
      "Paleta: Nogal, Blanco, Gris vetado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-07-D",
    "title": "Despensa alta y esquinera",
    "category": "Cocinas",
    "woodType": "Madera pintada de blanco",
    "description": "Despensa alta y esquinera con sistema de extracción deslizante, optimizando el espacio de almacenamiento con un diseño moderno y acabado en blanco mate.",
    "detailedStory": "Despensa alta y esquinera con sistema de extracción deslizante, optimizando el espacio de almacenamiento con un diseño moderno y acabado en blanco mate. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-07_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada de blanco",
      "Herrajes metálicos de extracción",
      "Acabado satinado",
      "Paleta: Blanco mate",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-08-D",
    "title": "Cocina integral de diseño modular en color blanco",
    "category": "Cocinas",
    "woodType": "Madera pintada de blanco",
    "description": "Cocina integral de diseño modular en color blanco con molduras tipo shaker, complementada con anaqueles abiertos en un extremo y una isla con cubierta de piedra oscura.",
    "detailedStory": "Cocina integral de diseño modular en color blanco con molduras tipo shaker, complementada con anaqueles abiertos en un extremo y una isla con cubierta de piedra oscura. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-08_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada de blanco",
      "Herrajes metálicos plateados",
      "Cubierta de granito negro",
      "Paleta: Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-09-D",
    "title": "Cocina moderna de diseño lineal con isla central",
    "category": "Cocinas",
    "woodType": "Gabinetes superiores en acabado brillante",
    "description": "Cocina moderna de diseño lineal con isla central, gabinetes superiores blancos y almacenamiento inferior en tonos oscuros, complementada con iluminación LED bajo los muebles.",
    "detailedStory": "Cocina moderna de diseño lineal con isla central, gabinetes superiores blancos y almacenamiento inferior en tonos oscuros, complementada con iluminación LED bajo los muebles. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-09_d.webp",
    "isFeatured": true,
    "features": [
      "Gabinetes superiores en acabado brillante",
      "Gabinetes inferiores en tono oscuro",
      "Cubierta y salpicadero de granito o cuarzo jaspeado",
      "Paleta: Blanco, Gris oscuro, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-10-D",
    "title": "Amplia cocina de diseño clásico",
    "category": "Cocinas",
    "woodType": "Madera pintada en blanco",
    "description": "Amplia cocina de diseño clásico con gabinetes blancos de panel rehundido, isla central con encimera oscura y grandes ventanales con vista al exterior.",
    "detailedStory": "Amplia cocina de diseño clásico con gabinetes blancos de panel rehundido, isla central con encimera oscura y grandes ventanales con vista al exterior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-10_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada en blanco",
      "Cubierta de granito oscuro",
      "Encimera de cuarzo o mármol claro",
      "Paleta: Blanco, Gris oscuro, Natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-11-D",
    "title": "Cocina integral de estilo clásico moderno",
    "category": "Cocinas",
    "woodType": "Madera pintada en blanco",
    "description": "Cocina integral de estilo clásico moderno con gabinetes blancos, encimeras de piedra sintética y detalles decorativos en celosía.",
    "detailedStory": "Cocina integral de estilo clásico moderno con gabinetes blancos, encimeras de piedra sintética y detalles decorativos en celosía. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-11_d.webp",
    "isFeatured": true,
    "features": [
      "Madera pintada en blanco",
      "Cubierta de cuarzo o mármol sintético",
      "Herrajes de metal",
      "Paleta: Blanco, Gris, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-12-D",
    "title": "Cocina moderna con gabinetes de madera en tono nogal",
    "category": "Cocinas",
    "woodType": "Madera tipo nogal",
    "description": "Cocina moderna con gabinetes de madera en tono nogal, barra con cubierta negra y elegante iluminación colgante.",
    "detailedStory": "Cocina moderna con gabinetes de madera en tono nogal, barra con cubierta negra y elegante iluminación colgante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-12_d.webp",
    "isFeatured": true,
    "features": [
      "Madera tipo nogal",
      "Cubierta de granito o cuarzo negro",
      "Lámparas colgantes metálicas",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-13-D",
    "title": "Cocina integral de diseño contemporáneo",
    "category": "Cocinas",
    "woodType": "Laminado de alto brillo",
    "description": "Cocina integral de diseño contemporáneo con acabados en alto brillo y encimeras de cuarzo con veteado dramático. Presenta una estética limpia y funcional con integración de electrodomésticos de acero inoxidable.",
    "detailedStory": "Cocina integral de diseño contemporáneo con acabados en alto brillo y encimeras de cuarzo con veteado dramático. Presenta una estética limpia y funcional con integración de electrodomésticos de acero inoxidable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-13_d.webp",
    "isFeatured": true,
    "features": [
      "Laminado de alto brillo",
      "Cubierta de cuarzo con veteado tipo mármol",
      "Acero inoxidable",
      "Paleta: Blanco brillante, Gris veteado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-14-D",
    "title": "Cocina integral de diseño moderno en L",
    "category": "Cocinas",
    "woodType": "Melamina blanca",
    "description": "Cocina integral de diseño moderno en L con gabinetes blancos y detalles en madera tipo nogal, complementada con cubierta de granito.",
    "detailedStory": "Cocina integral de diseño moderno en L con gabinetes blancos y detalles en madera tipo nogal, complementada con cubierta de granito. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-14_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina blanca",
      "Madera laminada tonos nogal",
      "Cubierta de granito",
      "Paleta: Blanco, Nogal, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-15-D",
    "title": "Cocina integral de diseño moderno",
    "category": "Cocinas",
    "woodType": "Gabinetes de alto brillo",
    "description": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo y encimeras de cuarzo con patrón marmoleado, complementada con detalles en madera y una isla funcional.",
    "detailedStory": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo y encimeras de cuarzo con patrón marmoleado, complementada con detalles en madera y una isla funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-15_d.webp",
    "isFeatured": true,
    "features": [
      "Gabinetes de alto brillo",
      "Cubierta de cuarzo blanco con vetas negras",
      "Tarja negra",
      "Paleta: Blanco, Negro, Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-16-D",
    "title": "Cocina integral de diseño moderno",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de diseño moderno con gabinetes en negro mate combinados con alacenas superiores de madera de nogal, complementada con una isla central y un comedor de madera integrado.",
    "detailedStory": "Cocina integral de diseño moderno con gabinetes en negro mate combinados con alacenas superiores de madera de nogal, complementada con una isla central y un comedor de madera integrado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-16_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Melamina negra mate",
      "Cubierta de granito o cuarzo negro",
      "Paleta: Negro, Nogal, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-17-D",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Madera laminada color nogal",
    "description": "Cocina integral moderna con gabinetes en tono nogal y una elegante cubierta de piedra negra con vetas, optimizando el espacio en esquina.",
    "detailedStory": "Cocina integral moderna con gabinetes en tono nogal y una elegante cubierta de piedra negra con vetas, optimizando el espacio en esquina. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-17_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada color nogal",
      "Cubierta de granito o mármol negro",
      "Herrajes ocultos",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-18-D",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Melamina acabado madera",
    "description": "Cocina integral moderna con gabinetes en acabado madera nogal, isla central con barra desayunadora y cubierta de granito negro.",
    "detailedStory": "Cocina integral moderna con gabinetes en acabado madera nogal, isla central con barra desayunadora y cubierta de granito negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-18_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina acabado madera",
      "Cubierta de granito negro",
      "Acero inoxidable",
      "Paleta: Nogal, Negro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-19-D",
    "title": "Cocina integral de diseño contemporáneo en color blanco",
    "category": "Cocinas",
    "woodType": "Melamina blanca acabado brillante",
    "description": "Cocina integral de diseño contemporáneo en color blanco con acabado brillante, complementada con un refrigerador y electrodomésticos en tonos oscuros.",
    "detailedStory": "Cocina integral de diseño contemporáneo en color blanco con acabado brillante, complementada con un refrigerador y electrodomésticos en tonos oscuros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-19_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina blanca acabado brillante",
      "Electrodomésticos de acero inoxidable",
      "Revestimiento de pared tipo piedra oscura",
      "Paleta: Blanco, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-20-D",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral moderna con isla central en madera de nogal y cubierta de cuarzo veteado, complementada con gabinetes superiores e inferiores en acabado blanco brillante.",
    "detailedStory": "Cocina integral moderna con isla central en madera de nogal y cubierta de cuarzo veteado, complementada con gabinetes superiores e inferiores en acabado blanco brillante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-20_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Laminado blanco brillante",
      "Cubierta de cuarzo veteado",
      "Paleta: Nogal, Blanco, Gris claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-21-D",
    "title": "Cocina integral de diseño contemporáneo que combina gabinetes superiores blancos",
    "category": "Cocinas",
    "woodType": "Gabinetes de acabado brillante",
    "description": "Cocina integral de diseño contemporáneo que combina gabinetes superiores blancos con cajonera inferior gris oscura y una isla central con encimera de piedra.",
    "detailedStory": "Cocina integral de diseño contemporáneo que combina gabinetes superiores blancos con cajonera inferior gris oscura y una isla central con encimera de piedra. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-21_d.webp",
    "isFeatured": true,
    "features": [
      "Gabinetes de acabado brillante",
      "Cubierta y salpicadero de granito o cuarzo claro con motas",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Blanco, Gris oscuro, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-22",
    "title": "Cocina moderna con barra en L y encimera de granito claro",
    "category": "Cocinas",
    "woodType": "Madera natural",
    "description": "Cocina moderna con barra en L y encimera de granito claro, combinando muebles bajos de madera con gabinetes superiores en tono gris oscuro.",
    "detailedStory": "Cocina moderna con barra en L y encimera de granito claro, combinando muebles bajos de madera con gabinetes superiores en tono gris oscuro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-22.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Melamina gris mate",
      "Granito blanco veteado",
      "Paleta: Madera natural, Gris oscuro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-23",
    "title": "Cocina de estilo clásico",
    "category": "Cocinas",
    "woodType": "Madera con acabado en tinte oscuro",
    "description": "Cocina de estilo clásico con gabinetes de madera oscura y molduras detalladas que aportan elegancia y calidez. El diseño integra una estética tradicional con acabados robustos y funcionales.",
    "detailedStory": "Cocina de estilo clásico con gabinetes de madera oscura y molduras detalladas que aportan elegancia y calidez. El diseño integra una estética tradicional con acabados robustos y funcionales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-23.webp",
    "isFeatured": false,
    "features": [
      "Madera con acabado en tinte oscuro",
      "Molduras decorativas de corona",
      "Cubierta de granito o piedra natural",
      "Paleta: Nogal oscuro, Beige arena",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-24",
    "title": "Cocina integral de diseño moderno en color negro mate",
    "category": "Cocinas",
    "woodType": "Melamina negra mate",
    "description": "Cocina integral de diseño moderno en color negro mate con isla central y electrodomésticos integrados, ideal para espacios contemporáneos y funcionales.",
    "detailedStory": "Cocina integral de diseño moderno en color negro mate con isla central y electrodomésticos integrados, ideal para espacios contemporáneos y funcionales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-24.webp",
    "isFeatured": false,
    "features": [
      "Melamina negra mate",
      "Acero inoxidable",
      "Electrodomésticos integrados",
      "Paleta: Negro mate, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-25",
    "title": "Mueble de tocador en madera",
    "category": "Cocinas",
    "woodType": "Madera teñida",
    "description": "Mueble de tocador en madera con cajones deslizantes de alta capacidad y elegante cubierta de piedra natural.",
    "detailedStory": "Mueble de tocador en madera con cajones deslizantes de alta capacidad y elegante cubierta de piedra natural. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-25.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Encimera de piedra natural",
      "Herrajes metálicos",
      "Paleta: Madera nogal, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-26",
    "title": "Módulo integral de cocina en madera de nogal",
    "category": "Cocinas",
    "woodType": "Madera natural con veta marcada",
    "description": "Módulo integral de cocina en madera de nogal con acabado natural, diseñado para integrar el refrigerador y optimizar el espacio de almacenamiento superior.",
    "detailedStory": "Módulo integral de cocina en madera de nogal con acabado natural, diseñado para integrar el refrigerador y optimizar el espacio de almacenamiento superior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-26.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta marcada",
      "Acero inoxidable",
      "Cubierta de granito negro",
      "Paleta: Madera nogal, Acero inoxidable, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-27",
    "title": "Amplia cocina integral de estilo clásico",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Amplia cocina integral de estilo clásico con carpintería en madera de nogal, destacando una imponente campana extractora central y una isla con barra desayunadora.",
    "detailedStory": "Amplia cocina integral de estilo clásico con carpintería en madera de nogal, destacando una imponente campana extractora central y una isla con barra desayunadora. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-27.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Cubierta de granito",
      "Metal cromado",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-28",
    "title": "Mueble de cocina modular en madera natural de nogal",
    "category": "Cocinas",
    "woodType": "Madera natural con chapa de nogal",
    "description": "Mueble de cocina modular en madera natural de nogal, con gabinetes superiores de apertura elevable y áreas inferiores preparadas para instalación de tarja y electrodomésticos.",
    "detailedStory": "Mueble de cocina modular en madera natural de nogal, con gabinetes superiores de apertura elevable y áreas inferiores preparadas para instalación de tarja y electrodomésticos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-28.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con chapa de nogal",
      "Herrajes hidráulicos para puertas elevables",
      "Acero inoxidable en campana extractora",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-29",
    "title": "Cocina integral de estilo moderno con isla central",
    "category": "Cocinas",
    "woodType": "Gabinetes con acabado brillante",
    "description": "Cocina integral de estilo moderno con isla central, gabinetes superiores blancos de alto brillo y encimeras de granito con detalles en tono gris.",
    "detailedStory": "Cocina integral de estilo moderno con isla central, gabinetes superiores blancos de alto brillo y encimeras de granito con detalles en tono gris. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-29.webp",
    "isFeatured": false,
    "features": [
      "Gabinetes con acabado brillante",
      "Cubierta de granito",
      "Acero inoxidable",
      "Paleta: Blanco, Gris, Beige jaspeado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-30",
    "title": "Cocina integral de estilo rústico contemporáneo",
    "category": "Cocinas",
    "woodType": "Madera pintada en tono verde",
    "description": "Cocina integral de estilo rústico contemporáneo con carpintería en tono verde oliva y encimeras de cuarzo, combinada con detalles en madera natural.",
    "detailedStory": "Cocina integral de estilo rústico contemporáneo con carpintería en tono verde oliva y encimeras de cuarzo, combinada con detalles en madera natural. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-30.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada en tono verde",
      "Cubierta de cuarzo blanco",
      "Madera natural teñida",
      "Paleta: Verde oliva, Madera natural, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-31",
    "title": "Cocina integral de diseño moderno que combina gabinetes superiores en tono gris grafito",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de diseño moderno que combina gabinetes superiores en tono gris grafito con carpintería de madera y una barra desayunadora con cubierta de granito.",
    "detailedStory": "Cocina integral de diseño moderno que combina gabinetes superiores en tono gris grafito con carpintería de madera y una barra desayunadora con cubierta de granito. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-31.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina gris mate",
      "Cubierta de granito claro",
      "Paleta: Gris grafito, Nogal, Blanco moteado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-32",
    "title": "Cocina integral de estilo moderno",
    "category": "Cocinas",
    "woodType": "Madera laminada de nogal",
    "description": "Cocina integral de estilo moderno con gabinetes de madera tipo nogal, encimera de granito negro y elegante salpicadero de mosaico.",
    "detailedStory": "Cocina integral de estilo moderno con gabinetes de madera tipo nogal, encimera de granito negro y elegante salpicadero de mosaico. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-32.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Cubierta de granito negro",
      "Herrajes metálicos cilíndricos",
      "Paleta: Nogal, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-33",
    "title": "Cocina integral de madera oscura",
    "category": "Cocinas",
    "woodType": "Madera de nogal o caoba",
    "description": "Cocina integral de madera oscura con acabados tradicionales, cubierta de granito y distribución en L optimizada con isla central.",
    "detailedStory": "Cocina integral de madera oscura con acabados tradicionales, cubierta de granito y distribución en L optimizada con isla central. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-33.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal o caoba",
      "Cubierta de granito",
      "Herrajes metálicos",
      "Paleta: Nogal, Beige, Gris piedra",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-34",
    "title": "Cocina integral de diseño contemporáneo que combina gabinetes en gris oscuro",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de diseño contemporáneo que combina gabinetes en gris oscuro, detalles en madera cálida y barras con cubiertas de granito.",
    "detailedStory": "Cocina integral de diseño contemporáneo que combina gabinetes en gris oscuro, detalles en madera cálida y barras con cubiertas de granito. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-34.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina gris",
      "Cubierta de granito con chispas blancas y grises",
      "Paleta: Gris oscuro, Madera natural, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-35",
    "title": "Cocina de diseño contemporáneo en color blanco brillante",
    "category": "Cocinas",
    "woodType": "Melamina acabado brillante",
    "description": "Cocina de diseño contemporáneo en color blanco brillante con encimera oscura y gabinetes superiores sin tiradores visibles.",
    "detailedStory": "Cocina de diseño contemporáneo en color blanco brillante con encimera oscura y gabinetes superiores sin tiradores visibles. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-35.webp",
    "isFeatured": false,
    "features": [
      "Melamina acabado brillante",
      "Cubierta de granito negro",
      "Herrajes integrados",
      "Paleta: Blanco brillante, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-36",
    "title": "Mueble de alacena o gavetas empotradas en la pared",
    "category": "Cocinas",
    "woodType": "Madera natural",
    "description": "Mueble de alacena o gavetas empotradas en la pared con puertas abatibles de madera en tono nogal, ideales para optimizar el almacenamiento en espacios reducidos.",
    "detailedStory": "Mueble de alacena o gavetas empotradas en la pared con puertas abatibles de madera en tono nogal, ideales para optimizar el almacenamiento en espacios reducidos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-36.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Chapa de madera",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-37",
    "title": "Cocina integral de diseño contemporáneo y minimalista",
    "category": "Cocinas",
    "woodType": "Melamina negra mate",
    "description": "Cocina integral de diseño contemporáneo y minimalista con acabado negro mate liso, equipada con gabinetes superiores e inferiores y torre de almacenamiento alta.",
    "detailedStory": "Cocina integral de diseño contemporáneo y minimalista con acabado negro mate liso, equipada con gabinetes superiores e inferiores y torre de almacenamiento alta. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-37.webp",
    "isFeatured": false,
    "features": [
      "Melamina negra mate",
      "Acero inoxidable",
      "Paleta: Negro mate, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-38",
    "title": "Módulo de cocina en proceso de instalación",
    "category": "Cocinas",
    "woodType": "Madera laqueada negra",
    "description": "Módulo de cocina en proceso de instalación con acabado en negro mate y cajones de gran capacidad con rieles telescópicos.",
    "detailedStory": "Módulo de cocina en proceso de instalación con acabado en negro mate y cajones de gran capacidad con rieles telescópicos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-38.webp",
    "isFeatured": false,
    "features": [
      "Madera laqueada negra",
      "Herrajes metálicos de extracción total",
      "Paleta: Negro mate",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-39",
    "title": "Cocina moderna con gabinetes de madera cálida",
    "category": "Cocinas",
    "woodType": "Madera laminada tonos rojizos",
    "description": "Cocina moderna con gabinetes de madera cálida, cubierta de cuarzo blanco, fregadero tipo vajilla y llamativos azulejos hidráulicos decorativos en la pared.",
    "detailedStory": "Cocina moderna con gabinetes de madera cálida, cubierta de cuarzo blanco, fregadero tipo vajilla y llamativos azulejos hidráulicos decorativos en la pared. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-39.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada tonos rojizos",
      "Cubierta de cuarzo blanco",
      "Azulejo hidráulico decorativo",
      "Paleta: Rojo nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-40",
    "title": "Cocina con diseño de carpintería flotante en madera y detalles en negro",
    "category": "Cocinas",
    "woodType": "Madera natural",
    "description": "Cocina con diseño de carpintería flotante en madera y detalles en negro, complementada con iluminación colgante.",
    "detailedStory": "Cocina con diseño de carpintería flotante en madera y detalles en negro, complementada con iluminación colgante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-40.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Vidrio en luminarias",
      "Metal negro",
      "Paleta: Nogal, Negro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-41",
    "title": "Cocina integral de diseño moderno",
    "category": "Cocinas",
    "woodType": "Laminado blanco mate",
    "description": "Cocina integral de diseño moderno con gabinetes blancos lisos y amplias superficies de trabajo en cuarzo, creando un espacio limpio y funcional.",
    "detailedStory": "Cocina integral de diseño moderno con gabinetes blancos lisos y amplias superficies de trabajo en cuarzo, creando un espacio limpio y funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-41.webp",
    "isFeatured": false,
    "features": [
      "Laminado blanco mate",
      "Cubierta de cuarzo blanco",
      "Perfilería metálica",
      "Paleta: Blanco, Gris claro, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-42",
    "title": "Cocina moderna de líneas limpias y diseño compacto",
    "category": "Cocinas",
    "woodType": "Cubierta de granito o cuarzo",
    "description": "Cocina moderna de líneas limpias y diseño compacto, equipada con gabinetes en tono gris mate, electrodomésticos empotrados de acero inoxidable y una isla con cubierta de piedra.",
    "detailedStory": "Cocina moderna de líneas limpias y diseño compacto, equipada con gabinetes en tono gris mate, electrodomésticos empotrados de acero inoxidable y una isla con cubierta de piedra. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-42.webp",
    "isFeatured": false,
    "features": [
      "Cubierta de granito o cuarzo",
      "Melamina gris mate",
      "Acero inoxidable",
      "Paleta: Gris, Blanco, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-43",
    "title": "Cocina integral de diseño moderno",
    "category": "Cocinas",
    "woodType": "Melamina blanca acabado alto brillo",
    "description": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo y contraste en encimera y protector contra salpicaduras en color negro.",
    "detailedStory": "Cocina integral de diseño moderno con gabinetes blancos de alto brillo y contraste en encimera y protector contra salpicaduras en color negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-43.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca acabado alto brillo",
      "Cubierta de granito negro",
      "Campana extractora de acero negro",
      "Paleta: Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-44",
    "title": "Amplia cocina integral de estilo clásico en madera de tonos cálidos",
    "category": "Cocinas",
    "woodType": "Madera maciza",
    "description": "Amplia cocina integral de estilo clásico en madera de tonos cálidos, con isla central iluminada y cubiertas de piedra natural veteada.",
    "detailedStory": "Amplia cocina integral de estilo clásico en madera de tonos cálidos, con isla central iluminada y cubiertas de piedra natural veteada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-44.webp",
    "isFeatured": false,
    "features": [
      "Madera maciza",
      "Chapa de madera",
      "Cubierta de granito o cuarzo veteado",
      "Paleta: Nogal, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-45",
    "title": "Cocina moderna con gabinetes superiores e inferiores en tono nogal y una elegante cubierta de piedra negra veteada",
    "category": "Cocinas",
    "woodType": "Madera laminada color nogal",
    "description": "Cocina moderna con gabinetes superiores e inferiores en tono nogal y una elegante cubierta de piedra negra veteada, diseñada con líneas rectas y optimización de espacios.",
    "detailedStory": "Cocina moderna con gabinetes superiores e inferiores en tono nogal y una elegante cubierta de piedra negra veteada, diseñada con líneas rectas y optimización de espacios. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-45.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada color nogal",
      "Cubierta de granito o mármol negro veteado",
      "Electrodomésticos de acero inoxidable y negro",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-46",
    "title": "Mueble de cocina de madera",
    "category": "Cocinas",
    "woodType": "Madera teñida",
    "description": "Mueble de cocina de madera con puertas paneladas y acabado en tonos cálidos, que incluye armarios altos y bajos para maximizar el almacenamiento.",
    "detailedStory": "Mueble de cocina de madera con puertas paneladas y acabado en tonos cálidos, que incluye armarios altos y bajos para maximizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-46.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes metálicos dorados",
      "Paleta: Castaño, Roble",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-47",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Gabinetes de acabado brillante",
    "description": "Cocina integral moderna con gabinetes superiores e inferiores de acabado blanco brillante, encimera de madera y electrodomésticos empotrados, maximizando la funcionalidad y la estética limpia.",
    "detailedStory": "Cocina integral moderna con gabinetes superiores e inferiores de acabado blanco brillante, encimera de madera y electrodomésticos empotrados, maximizando la funcionalidad y la estética limpia. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-47.webp",
    "isFeatured": false,
    "features": [
      "Gabinetes de acabado brillante",
      "Encimera de madera",
      "Electrodomésticos de acero inoxidable empotrados",
      "Paleta: Blanco brillante, Madera natural, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-48",
    "title": "Cocina moderna con gabinetes blancos y backsplash de mosaico gris",
    "category": "Cocinas",
    "woodType": "Madera lacada en blanco",
    "description": "Cocina moderna con gabinetes blancos y backsplash de mosaico gris, equipada con electrodomésticos de acero inoxidable y cubierta clara.",
    "detailedStory": "Cocina moderna con gabinetes blancos y backsplash de mosaico gris, equipada con electrodomésticos de acero inoxidable y cubierta clara. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-48.webp",
    "isFeatured": false,
    "features": [
      "Madera lacada en blanco",
      "Cubierta de cuarzo blanco",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Blanco, Gris, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-49",
    "title": "Cocina integral de diseño moderno en color blanco",
    "category": "Cocinas",
    "woodType": "Madera laqueada blanca",
    "description": "Cocina integral de diseño moderno en color blanco con barra desayunadora, gabinetes superiores e inferiores de almacenamiento y electrodomésticos integrados de acero inoxidable.",
    "detailedStory": "Cocina integral de diseño moderno en color blanco con barra desayunadora, gabinetes superiores e inferiores de almacenamiento y electrodomésticos integrados de acero inoxidable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-49.webp",
    "isFeatured": false,
    "features": [
      "Madera laqueada blanca",
      "Cubierta de cuarzo blanco",
      "Acero inoxidable",
      "Paleta: Blanco, Gris acero, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-50",
    "title": "Mueble aéreo de cocina en color blanco",
    "category": "Cocinas",
    "woodType": "Madera pintada de blanco",
    "description": "Mueble aéreo de cocina en color blanco con sección para vino, copero y repisas laterales abiertas, contrastando con una cubierta de cuarzo negro.",
    "detailedStory": "Mueble aéreo de cocina en color blanco con sección para vino, copero y repisas laterales abiertas, contrastando con una cubierta de cuarzo negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-50.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada de blanco",
      "Cubierta de cuarzo negro con vetas blancas",
      "Vidrio en puertas superiores",
      "Paleta: Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-51",
    "title": "Amplia cocina integral de estilo clásico en madera de nogal",
    "category": "Cocinas",
    "woodType": "Madera maciza tono nogal con molduras",
    "description": "Amplia cocina integral de estilo clásico en madera de nogal, equipada con una isla central de granito, barra desayunadora y elegantes acabados de carpintería artesanal.",
    "detailedStory": "Amplia cocina integral de estilo clásico en madera de nogal, equipada con una isla central de granito, barra desayunadora y elegantes acabados de carpintería artesanal. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-51.webp",
    "isFeatured": false,
    "features": [
      "Madera maciza tono nogal con molduras",
      "Cubiertas de granito natural",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Nogal, Beige jaspeado, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-52",
    "title": "Isola de cocina modular",
    "category": "Cocinas",
    "woodType": "Madera laminada",
    "description": "Isola de cocina modular con cubierta de granito negro y gabinetes inferiores de madera, combinando cajonera lateral y puertas abatibles.",
    "detailedStory": "Isola de cocina modular con cubierta de granito negro y gabinetes inferiores de madera, combinando cajonera lateral y puertas abatibles. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-52.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Cubierta de granito negro",
      "Triplay",
      "Paleta: Madera natural, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-53",
    "title": "Mueble de cocina modular en tono blanco marfil",
    "category": "Cocinas",
    "woodType": "Madera laqueada",
    "description": "Mueble de cocina modular en tono blanco marfil con elegantes tiradores dorados, que incluye cajonera de extracción completa y un especiero deslizante oculto.",
    "detailedStory": "Mueble de cocina modular en tono blanco marfil con elegantes tiradores dorados, que incluye cajonera de extracción completa y un especiero deslizante oculto. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-53.webp",
    "isFeatured": false,
    "features": [
      "Madera laqueada",
      "Cubierta de mármol o cuarzo",
      "Herrajes metálicos dorados",
      "Paleta: Blanco marfil, Dorado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-54",
    "title": "Módulo de cocina inferior",
    "category": "Cocinas",
    "woodType": "Melamina blanca",
    "description": "Módulo de cocina inferior con sistema de extracción extraíble y contenedor de basura integrado, diseñado para optimizar el espacio y la funcionalidad.",
    "detailedStory": "Módulo de cocina inferior con sistema de extracción extraíble y contenedor de basura integrado, diseñado para optimizar el espacio y la funcionalidad. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-54.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca",
      "Acero inoxidable",
      "Plástico",
      "Paleta: Blanco, Gris, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-55",
    "title": "Cocina integral de diseño luminoso en tonos crema",
    "category": "Cocinas",
    "woodType": "Madera pintada en acabado mate",
    "description": "Cocina integral de diseño luminoso en tonos crema con tiradores metálicos dorados, combinada con electrodomésticos en acero inoxidable y amplias superficies de trabajo.",
    "detailedStory": "Cocina integral de diseño luminoso en tonos crema con tiradores metálicos dorados, combinada con electrodomésticos en acero inoxidable y amplias superficies de trabajo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-55.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada en acabado mate",
      "Herrajes metálicos dorados",
      "Cubierta de cuarzo o granito claro",
      "Paleta: Crema, Blanco, Gris metálico",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-56",
    "title": "Cocina integral de madera en tono nogal",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de madera en tono nogal con gabinetes superiores y campana extractora de acero inoxidable, optimizada para espacios funcionales.",
    "detailedStory": "Cocina integral de madera en tono nogal con gabinetes superiores y campana extractora de acero inoxidable, optimizada para espacios funcionales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-56.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Acero inoxidable",
      "Cerámica",
      "Paleta: Nogal, Blanco, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-57",
    "title": "Cocina integral de diseño moderno en forma de U",
    "category": "Cocinas",
    "woodType": "Melamina blanca acabado brillante",
    "description": "Cocina integral de diseño moderno en forma de U con gabinetes blancos de acabado brillante y superficies en negro contrastante, optimizando el espacio con almacenamiento vertical.",
    "detailedStory": "Cocina integral de diseño moderno en forma de U con gabinetes blancos de acabado brillante y superficies en negro contrastante, optimizando el espacio con almacenamiento vertical. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-57.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca acabado brillante",
      "Cubierta de cuarzo negro",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Blanco brillante, Negro profundo, Acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-58",
    "title": "Mobiliario modular de cocina en tono blanco",
    "category": "Cocinas",
    "woodType": "Madera pintada",
    "description": "Mobiliario modular de cocina en tono blanco con diseño de molduras clásicas, que incluye gabinetes superiores abiertos y encimera corrida para optimizar el almacenamiento.",
    "detailedStory": "Mobiliario modular de cocina en tono blanco con diseño de molduras clásicas, que incluye gabinetes superiores abiertos y encimera corrida para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-58.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada",
      "Cubierta laminada",
      "Paleta: Blanco, Beige claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-59",
    "title": "Amplia cocina integral de diseño clásico",
    "category": "Cocinas",
    "woodType": "Madera de nogal con molduras",
    "description": "Amplia cocina integral de diseño clásico con gabinetes de madera tallada, isla central con barra desayunadora y encimeras de granito veteado.",
    "detailedStory": "Amplia cocina integral de diseño clásico con gabinetes de madera tallada, isla central con barra desayunadora y encimeras de granito veteado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-59.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal con molduras",
      "Cubierta y salpicadero de granito veteado",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Nogal, Beige, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-60",
    "title": "Cocina de diseño clásico y funcional",
    "category": "Cocinas",
    "woodType": "Madera lacada en color crema",
    "description": "Cocina de diseño clásico y funcional con gabinetes superiores e inferiores en tono crema, detalles veteados y elegantes tiradores dorados.",
    "detailedStory": "Cocina de diseño clásico y funcional con gabinetes superiores e inferiores en tono crema, detalles veteados y elegantes tiradores dorados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-60.webp",
    "isFeatured": false,
    "features": [
      "Madera lacada en color crema",
      "Cubierta de mármol o cuarzo veteado",
      "Herrajes y tiradores de latón dorado",
      "Paleta: Crema, Blanco, Dorado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-61",
    "title": "Cocina integral moderna de diseño en L",
    "category": "Cocinas",
    "woodType": "Melamina blanca brillante",
    "description": "Cocina integral moderna de diseño en L con gabinetes blancos de alto brillo y encimera de cuarzo con vetas artísticas, optimizando la iluminación y el espacio de almacenamiento.",
    "detailedStory": "Cocina integral moderna de diseño en L con gabinetes blancos de alto brillo y encimera de cuarzo con vetas artísticas, optimizando la iluminación y el espacio de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-61.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca brillante",
      "Cubierta de cuarzo con veta",
      "Herrajes ocultos",
      "Paleta: Blanco brillante, Negro en vetas",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-62",
    "title": "Cocina integral de estilo moderno",
    "category": "Cocinas",
    "woodType": "Madera oscura melamínica",
    "description": "Cocina integral de estilo moderno con gabinetes superiores e inferiores en tono madera oscura y una amplia barra con cubierta de granito claro.",
    "detailedStory": "Cocina integral de estilo moderno con gabinetes superiores e inferiores en tono madera oscura y una amplia barra con cubierta de granito claro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-62.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura melamínica",
      "Cubierta de granito claro",
      "Fregadero integrado",
      "Paleta: Café oscuro, Blanco, Gris moteado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-63",
    "title": "Cocina integral de estilo clásico contemporáneo en tono blanco hueso",
    "category": "Cocinas",
    "woodType": "Madera pintada de blanco",
    "description": "Cocina integral de estilo clásico contemporáneo en tono blanco hueso, con tiradores dorados, campana extractora de acero inoxidable y amplios espacios de almacenamiento superior e inferior.",
    "detailedStory": "Cocina integral de estilo clásico contemporáneo en tono blanco hueso, con tiradores dorados, campana extractora de acero inoxidable y amplios espacios de almacenamiento superior e inferior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-63.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada de blanco",
      "Cubierta de mármol o granito claro",
      "Herrajes metálicos dorados",
      "Paleta: Blanco hueso, Dorado, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-64",
    "title": "Instalación de cocina modular en madera de roble",
    "category": "Cocinas",
    "woodType": "Madera de roble teñida",
    "description": "Instalación de cocina modular en madera de roble con tonos cálidos, diseño clásico de puertas paneladas y distribución en U.",
    "detailedStory": "Instalación de cocina modular en madera de roble con tonos cálidos, diseño clásico de puertas paneladas y distribución en U. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-64.webp",
    "isFeatured": false,
    "features": [
      "Madera de roble teñida",
      "Gabinetes con marco y panel rehundido",
      "Herrajes de latón",
      "Paleta: Roble miel, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-65",
    "title": "Mueble de cocina integral en madera",
    "category": "Cocinas",
    "woodType": "Madera enchapada tipo nogal",
    "description": "Mueble de cocina integral en madera con acabado nogal y electrodomésticos integrados de acero inoxidable, destacando por sus líneas limpias y diseño funcional.",
    "detailedStory": "Mueble de cocina integral en madera con acabado nogal y electrodomésticos integrados de acero inoxidable, destacando por sus líneas limpias y diseño funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-65.webp",
    "isFeatured": false,
    "features": [
      "Madera enchapada tipo nogal",
      "Acero inoxidable",
      "Herrajes metálicos lineales",
      "Paleta: Nogal, Acero inoxidable, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-66",
    "title": "Cocina moderna con gabinetes superiores blancos y base de madera en tono nogal",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina moderna con gabinetes superiores blancos y base de madera en tono nogal, complementada con una cubierta oscura y un diseño funcional de almacenamiento.",
    "detailedStory": "Cocina moderna con gabinetes superiores blancos y base de madera en tono nogal, complementada con una cubierta oscura y un diseño funcional de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-66.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina blanca",
      "Cubierta de granito negro",
      "Paleta: Nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-67",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Melamina acabado madera",
    "description": "Cocina integral moderna con gabinetes en tono nogal y encimeras de granito negro, equipada con campana extractora y electrodomésticos integrados.",
    "detailedStory": "Cocina integral moderna con gabinetes en tono nogal y encimeras de granito negro, equipada con campana extractora y electrodomésticos integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-67.webp",
    "isFeatured": false,
    "features": [
      "Melamina acabado madera",
      "Cubierta de granito negro",
      "Herrajes metálicos de acero inoxidable",
      "Paleta: Nogal, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-68",
    "title": "Mueble de cocina inferior en L",
    "category": "Cocinas",
    "woodType": "Madera laminada texturizada",
    "description": "Mueble de cocina inferior en L con gabinetes de madera texturizada y una elegante cubierta de granito negro con tarja integrada.",
    "detailedStory": "Mueble de cocina inferior en L con gabinetes de madera texturizada y una elegante cubierta de granito negro con tarja integrada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-68.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada texturizada",
      "Cubierta de granito negro",
      "Acero inoxidable",
      "Paleta: Madera natural, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-69",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Madera de nogal oscuro",
    "description": "Cocina integral moderna con gabinetes en tono nogal oscuro y encimeras de piedra clara, diseñada para maximizar el almacenamiento y el espacio de trabajo.",
    "detailedStory": "Cocina integral moderna con gabinetes en tono nogal oscuro y encimeras de piedra clara, diseñada para maximizar el almacenamiento y el espacio de trabajo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-69.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal oscuro",
      "Granito o cuarzo claro",
      "Fregadero de acero o resina negra",
      "Paleta: Café nogal, Gris claro con motas, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-70",
    "title": "Amplia cocina moderna con carpintería en acabado nogal",
    "category": "Cocinas",
    "woodType": "Madera laminada de nogal",
    "description": "Amplia cocina moderna con carpintería en acabado nogal, isla central con barra en piedra oscura y electrodomésticos integrados.",
    "detailedStory": "Amplia cocina moderna con carpintería en acabado nogal, isla central con barra en piedra oscura y electrodomésticos integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-70.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Cubierta de granito o cuarzo negro",
      "Acero inoxidable",
      "Paleta: Nogal, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-71",
    "title": "Cocina integral de estilo moderno",
    "category": "Cocinas",
    "woodType": "Madera de nogal o chapa de madera",
    "description": "Cocina integral de estilo moderno con gabinetes de madera cálida, empotrados para horno y lavavajillas, complementados por un llamativo backsplash de azulejos decorativos.",
    "detailedStory": "Cocina integral de estilo moderno con gabinetes de madera cálida, empotrados para horno y lavavajillas, complementados por un llamativo backsplash de azulejos decorativos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-71.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal o chapa de madera",
      "Cubierta de granito o cuarzo",
      "Electrodomésticos de acero inoxidable",
      "Paleta: Nogal, Gris acero, Multicolor",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-72",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral moderna con combinación de gabinetes en madera natural de nogal y frentes blancos mate, optimizada con espacios dedicados para electrodomésticos y almacenamiento integrado.",
    "detailedStory": "Cocina integral moderna con combinación de gabinetes en madera natural de nogal y frentes blancos mate, optimizada con espacios dedicados para electrodomésticos y almacenamiento integrado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-72.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina blanca mate",
      "Cubierta de granito negro",
      "Paleta: Nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-73",
    "title": "Cocina integral de madera en tono nogal",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral de madera en tono nogal con diseño clásico, molduras superiores pronunciadas y elegantes tiradores metálicos verticales.",
    "detailedStory": "Cocina integral de madera en tono nogal con diseño clásico, molduras superiores pronunciadas y elegantes tiradores metálicos verticales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-73.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Cubierta de granito",
      "Herrajes de acero inoxidable",
      "Paleta: Nogal, Acero inoxidable, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-74",
    "title": "Cocina integral en madera oscura",
    "category": "Cocinas",
    "woodType": "Madera oscura acabado nogal",
    "description": "Cocina integral en madera oscura con gabinetes superiores e inferiores, cubierta de granito claro y estufa empotrada de diseño funcional.",
    "detailedStory": "Cocina integral en madera oscura con gabinetes superiores e inferiores, cubierta de granito claro y estufa empotrada de diseño funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-74.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura acabado nogal",
      "Cubierta de granito claro",
      "Herrajes metálicos tubulares",
      "Paleta: Nogal oscuro, Blanco, Gris claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-75",
    "title": "Mueble de cocina de diseño clásico contemporáneo en acabado blanco",
    "category": "Cocinas",
    "woodType": "Madera lacada en blanco",
    "description": "Mueble de cocina de diseño clásico contemporáneo en acabado blanco con gavetas extraíbles y cubierta de granito oscuro.",
    "detailedStory": "Mueble de cocina de diseño clásico contemporáneo en acabado blanco con gavetas extraíbles y cubierta de granito oscuro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-75.webp",
    "isFeatured": false,
    "features": [
      "Madera lacada en blanco",
      "Cubierta de granito oscuro",
      "Herrajes metálicos",
      "Paleta: Blanco, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-76",
    "title": "Cocina integral de diseño luminoso",
    "category": "Cocinas",
    "woodType": "Madera lacada en blanco",
    "description": "Cocina integral de diseño luminoso con gabinetes blancos tipo shaker, cubierta de cuarzo y un salpicadero de mosaico texturizado.",
    "detailedStory": "Cocina integral de diseño luminoso con gabinetes blancos tipo shaker, cubierta de cuarzo y un salpicadero de mosaico texturizado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-76.webp",
    "isFeatured": false,
    "features": [
      "Madera lacada en blanco",
      "Cubierta de cuarzo blanco",
      "Azulejo tipo mosaico decorativo",
      "Paleta: Blanco, Gris, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINA-77",
    "title": "Mobiliario de cocina en acabado blanco",
    "category": "Cocinas",
    "woodType": "Madera lacada",
    "description": "Mobiliario de cocina en acabado blanco con puertas paneladas y molduras sutiles, integrado de manera óptima junto al refrigerador en un espacio funcional.",
    "detailedStory": "Mobiliario de cocina en acabado blanco con puertas paneladas y molduras sutiles, integrado de manera óptima junto al refrigerador en un espacio funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocina-77.webp",
    "isFeatured": false,
    "features": [
      "Madera lacada",
      "Pintura acabado mate",
      "Herrajes ocultos",
      "Paleta: Blanco, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_11",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Melamina acabado brillante",
    "description": "Cocina integral moderna con gabinetes superiores e inferiores de acabado blanco brillante, diseño en L y espacios integrados para electrodomésticos.",
    "detailedStory": "Cocina integral moderna con gabinetes superiores e inferiores de acabado blanco brillante, diseño en L y espacios integrados para electrodomésticos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_11.webp",
    "isFeatured": false,
    "features": [
      "Melamina acabado brillante",
      "Superficie de trabajo en madera contrachapada provisional",
      "Electrodomésticos empotrados de acero inoxidable",
      "Paleta: Blanco brillante, Madera natural (superficie), Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_27",
    "title": "Cocina integral en proceso de instalación que combina gabinetes superiores e inferiores de madera tipo nogal",
    "category": "Cocinas",
    "woodType": "Madera de nogal",
    "description": "Cocina integral en proceso de instalación que combina gabinetes superiores e inferiores de madera tipo nogal con frentes centrales en tono blanco, logrando un diseño limpio y funcional.",
    "detailedStory": "Cocina integral en proceso de instalación que combina gabinetes superiores e inferiores de madera tipo nogal con frentes centrales en tono blanco, logrando un diseño limpio y funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_27.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina blanca",
      "Superficie de concreto o piedra en preparación",
      "Paleta: Nogal natural, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_31",
    "title": "Cocina moderna de diseño lineal",
    "category": "Cocinas",
    "woodType": "Madera laminada de nogal",
    "description": "Cocina moderna de diseño lineal con gabinetes de piso en acabado madera tipo nogal y alacenas superiores en blanco mate, combinando tonos cálidos y neutros.",
    "detailedStory": "Cocina moderna de diseño lineal con gabinetes de piso en acabado madera tipo nogal y alacenas superiores en blanco mate, combinando tonos cálidos y neutros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_31.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Melamina blanca",
      "Herrajes ocultos",
      "Paleta: Nogal, Blanco, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_35",
    "title": "Cocina integral moderna en acabado negro mate",
    "category": "Cocinas",
    "woodType": "Melamina negra mate",
    "description": "Cocina integral moderna en acabado negro mate con isla central y electrodomésticos empotrados, que ofrece una estética sofisticada y funcional.",
    "detailedStory": "Cocina integral moderna en acabado negro mate con isla central y electrodomésticos empotrados, que ofrece una estética sofisticada y funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_35.webp",
    "isFeatured": false,
    "features": [
      "Melamina negra mate",
      "Acero inoxidable",
      "Electrodomésticos integrados",
      "Paleta: Negro mate, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_4",
    "title": "Mueble flotante de diseño minimalista",
    "category": "Cocinas",
    "woodType": "Melamina gris mate",
    "description": "Mueble flotante de diseño minimalista con acabado gris mate y cubierta blanca, equipado con gabinetes laterales y cajones centrales para almacenamiento óptimo.",
    "detailedStory": "Mueble flotante de diseño minimalista con acabado gris mate y cubierta blanca, equipado con gabinetes laterales y cajones centrales para almacenamiento óptimo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_4.webp",
    "isFeatured": false,
    "features": [
      "Melamina gris mate",
      "Cubierta de cuarzo blanco",
      "Herrajes ocultos",
      "Paleta: Gris, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "COCINAS_AHUALULCO_6",
    "title": "Cocina integral moderna",
    "category": "Cocinas",
    "woodType": "Madera con chapa de nogal",
    "description": "Cocina integral moderna con carpintería en chapa de nogal, isla central de granito negro y electrodomésticos empotrados, ofreciendo un diseño elegante y funcional.",
    "detailedStory": "Cocina integral moderna con carpintería en chapa de nogal, isla central de granito negro y electrodomésticos empotrados, ofreciendo un diseño elegante y funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/cocinas/cocinas_ahualulco_6.webp",
    "isFeatured": false,
    "features": [
      "Madera con chapa de nogal",
      "Cubierta de granito negro",
      "Acero inoxidable",
      "Paleta: Nogal, Negro, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-01-D",
    "title": "Closet modular de madera clara",
    "category": "Clósets",
    "woodType": "Melamina con acabado de madera natural",
    "description": "Closet modular de madera clara con amplio espacio de almacenamiento, repisas abiertas y un área de escritorio integrada con cajonera.",
    "detailedStory": "Closet modular de madera clara con amplio espacio de almacenamiento, repisas abiertas y un área de escritorio integrada con cajonera. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-01_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina con acabado de madera natural",
      "Herrajes metálicos",
      "Paleta: Roble claro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-02-D",
    "title": "Amplio vestidor modular de madera en tono nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Amplio vestidor modular de madera en tono nogal con diseño esquinero, cajoneras integradas y zapateras inclinadas.",
    "detailedStory": "Amplio vestidor modular de madera en tono nogal con diseño esquinero, cajoneras integradas y zapateras inclinadas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-02_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Racks para zapatos",
      "Paleta: Nogal cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-03-D",
    "title": "Closet esquinero empotrado en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet esquinero empotrado en madera de nogal, con múltiples secciones para colgar, cajoneras integradas y entrepaños ajustables que optimizan el espacio.",
    "detailedStory": "Closet esquinero empotrado en madera de nogal, con múltiples secciones para colgar, cajoneras integradas y entrepaños ajustables que optimizan el espacio. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-03_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro, Marrón natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-04-D",
    "title": "Closet abierto de diseño modular en madera de roble natural",
    "category": "Clósets",
    "woodType": "Madera contrachapada con chapa de roble",
    "description": "Closet abierto de diseño modular en madera de roble natural, con amplias repisas superiores, zapateras centrales y cajoneras laterales integradas.",
    "detailedStory": "Closet abierto de diseño modular en madera de roble natural, con amplias repisas superiores, zapateras centrales y cajoneras laterales integradas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-04_d.webp",
    "isFeatured": true,
    "features": [
      "Madera contrachapada con chapa de roble",
      "Estantería modular",
      "Paleta: Roble natural, Marrón claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-05-D",
    "title": "Closet de madera",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Closet de madera con acabado cálido y herrajes oscuros contrastantes, que integra un práctico módulo de tocador o barra con espejo.",
    "detailedStory": "Closet de madera con acabado cálido y herrajes oscuros contrastantes, que integra un práctico módulo de tocador o barra con espejo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-05_d.webp",
    "isFeatured": true,
    "features": [
      "Madera natural",
      "Herrajes de hierro forjado negro",
      "Espejo",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-06-D",
    "title": "Closet walk-in a medida en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet walk-in a medida en madera de nogal con acabados cálidos y optimización total del espacio, diseñado para un almacenamiento elegante.",
    "detailedStory": "Closet walk-in a medida en madera de nogal con acabados cálidos y optimización total del espacio, diseñado para un almacenamiento elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-06_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Pisos de mármol blanco",
      "Herrajes integrados",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-07-D",
    "title": "Amplio sistema de almacenamiento de piso a techo en color gris",
    "category": "Clósets",
    "woodType": "Melamina gris mate",
    "description": "Amplio sistema de almacenamiento de piso a techo en color gris, que combina repisas abiertas, cajoneras múltiples y compartimentos cerrados para una organización impecable.",
    "detailedStory": "Amplio sistema de almacenamiento de piso a techo en color gris, que combina repisas abiertas, cajoneras múltiples y compartimentos cerrados para una organización impecable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-07_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina gris mate",
      "Herrajes ocultos",
      "Paleta: Gris suave",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-08-D",
    "title": "Closet de piso a techo en acabado de madera estilo nogal",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet de piso a techo en acabado de madera estilo nogal con puertas abatibles y tiradores metálicos modernos.",
    "detailedStory": "Closet de piso a techo en acabado de madera estilo nogal con puertas abatibles y tiradores metálicos modernos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-08_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada",
      "Herrajes metálicos",
      "Paleta: Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-09-D",
    "title": "Closet de piso a techo en acabado madera tipo nogal",
    "category": "Clósets",
    "woodType": "Madera laminada con veta",
    "description": "Closet de piso a techo en acabado madera tipo nogal con múltiples compartimentos, puertas batientes y cajones inferiores integrados.",
    "detailedStory": "Closet de piso a techo en acabado madera tipo nogal con múltiples compartimentos, puertas batientes y cajones inferiores integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-09_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada con veta",
      "Herrajes metálicos",
      "Paleta: Nogal, Café oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-10-D",
    "title": "Closet modular de madera en tono nogal",
    "category": "Clósets",
    "woodType": "Madera contrachapada con chapa de madera",
    "description": "Closet modular de madera en tono nogal con múltiples compartimentos, cajones centrales y puertas batientes para almacenamiento optimizado.",
    "detailedStory": "Closet modular de madera en tono nogal con múltiples compartimentos, cajones centrales y puertas batientes para almacenamiento optimizado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-10_d.webp",
    "isFeatured": true,
    "features": [
      "Madera contrachapada con chapa de madera",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-11-D",
    "title": "Clóset modular de diseño contemporáneo en color negro mate",
    "category": "Clósets",
    "woodType": "Madera aglomerada",
    "description": "Clóset modular de diseño contemporáneo en color negro mate, con múltiples compartimentos, cajoneras internas y barras para colgar ropa.",
    "detailedStory": "Clóset modular de diseño contemporáneo en color negro mate, con múltiples compartimentos, cajoneras internas y barras para colgar ropa. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-11_d.webp",
    "isFeatured": true,
    "features": [
      "Madera aglomerada",
      "Acabado melamínico negro mate",
      "Herrajes metálicos",
      "Paleta: Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-12-D",
    "title": "Amplio vestidor modular de madera en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Amplio vestidor modular de madera en tono nogal oscuro, con múltiples compartimentos, estantería y una isla central con cajonera.",
    "detailedStory": "Amplio vestidor modular de madera en tono nogal oscuro, con múltiples compartimentos, estantería y una isla central con cajonera. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-12_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-13-D",
    "title": "Closet empotrado de diseño moderno en acabado gris oscuro",
    "category": "Clósets",
    "woodType": "Madera laminada o entamborada",
    "description": "Closet empotrado de diseño moderno en acabado gris oscuro, con puertas abatibles, repisas superiores, compartimentos cuadriculados centrales y cajones inferiores.",
    "detailedStory": "Closet empotrado de diseño moderno en acabado gris oscuro, con puertas abatibles, repisas superiores, compartimentos cuadriculados centrales y cajones inferiores. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-13_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada o entamborada",
      "Herrajes metálicos de bisagra",
      "Paleta: Gris oscuro, Gris pizarra",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-14-D",
    "title": "Amplio vestidor a medida revestido en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Amplio vestidor a medida revestido en madera de nogal, diseñado con múltiples compartimentos, cajoneras y zapateras integradas que maximizan el espacio y la funcionalidad.",
    "detailedStory": "Amplio vestidor a medida revestido en madera de nogal, diseñado con múltiples compartimentos, cajoneras y zapateras integradas que maximizan el espacio y la funcionalidad. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-14_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Espejo",
      "Herrajes metálicos",
      "Paleta: Nogal, Marrón cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-15-D",
    "title": "Closet empotrado de muro a muro en tono oscuro",
    "category": "Clósets",
    "woodType": "Madera entintada oscura",
    "description": "Closet empotrado de muro a muro en tono oscuro con múltiples puertas abatibles y cajonera central, que maximiza el almacenamiento con un diseño elegante y funcional.",
    "detailedStory": "Closet empotrado de muro a muro en tono oscuro con múltiples puertas abatibles y cajonera central, que maximiza el almacenamiento con un diseño elegante y funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-15_d.webp",
    "isFeatured": true,
    "features": [
      "Madera entintada oscura",
      "Herrajes metálicos cilíndricos",
      "Paleta: Café oscuro, Wengué",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-16-D",
    "title": "Closet de pared a pared de diseño contemporáneo en tono gris mate",
    "category": "Clósets",
    "woodType": "Melamina acabado mate",
    "description": "Closet de pared a pared de diseño contemporáneo en tono gris mate, con múltiples compartimentos, cajoneras y repisas abiertas.",
    "detailedStory": "Closet de pared a pared de diseño contemporáneo en tono gris mate, con múltiples compartimentos, cajoneras y repisas abiertas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-16_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina acabado mate",
      "Herrajes ocultos",
      "Paleta: Gris claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-17-D",
    "title": "Closet modular de diseño moderno",
    "category": "Clósets",
    "woodType": "Madera de roble claro",
    "description": "Closet modular de diseño moderno con acabados en madera clara, integrando puertas batientes, cajoneras centrales y repisas abiertas.",
    "detailedStory": "Closet modular de diseño moderno con acabados en madera clara, integrando puertas batientes, cajoneras centrales y repisas abiertas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-17_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de roble claro",
      "Melamina acabado madera",
      "Paleta: Beige, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-18-D",
    "title": "Closet empotrado de diseño moderno en color blanco",
    "category": "Clósets",
    "woodType": "Melamina blanca",
    "description": "Closet empotrado de diseño moderno en color blanco, con múltiples compartimentos, cajoneras y secciones de colgado para una óptima organización.",
    "detailedStory": "Closet empotrado de diseño moderno en color blanco, con múltiples compartimentos, cajoneras y secciones de colgado para una óptima organización. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-18_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina blanca",
      "Herrajes metálicos",
      "Paleta: Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-19",
    "title": "Closet empotrado de madera",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet empotrado de madera con múltiples puertas abatibles, cajonera central y entrepisos superiores, optimizando el espacio de almacenamiento.",
    "detailedStory": "Closet empotrado de madera con múltiples puertas abatibles, cajonera central y entrepisos superiores, optimizando el espacio de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-19.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes de metal",
      "Melamina acabado madera",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-20",
    "title": "Closet empotrado de diseño moderno en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera laminada de nogal",
    "description": "Closet empotrado de diseño moderno en madera de nogal, con puertas corredizas superiores e inferiores, y un módulo interior con cajonera y repisas.",
    "detailedStory": "Closet empotrado de diseño moderno en madera de nogal, con puertas corredizas superiores e inferiores, y un módulo interior con cajonera y repisas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-20.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Herrajes metálicos deslizantes",
      "Paleta: Nogal oscuro, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-21",
    "title": "Closet de pared a pared en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet de pared a pared en madera de nogal con diseño empotrado, múltiples puertas y cajoneras integradas, optimizando el almacenamiento con elegancia.",
    "detailedStory": "Closet de pared a pared en madera de nogal con diseño empotrado, múltiples puertas y cajoneras integradas, optimizando el almacenamiento con elegancia. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-21.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes de metal cromado",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-22",
    "title": "Closet esquinero de diseño moderno",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet esquinero de diseño moderno con acabado en madera de nogal, que incluye módulos de almacenamiento abiertos, cajoneras y armarios superiores.",
    "detailedStory": "Closet esquinero de diseño moderno con acabado en madera de nogal, que incluye módulos de almacenamiento abiertos, cajoneras y armarios superiores. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-22.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-23",
    "title": "Closet de piso a techo en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet de piso a techo en madera de nogal con múltiples compartimentos, cajones internos y puertas superiores.",
    "detailedStory": "Closet de piso a techo en madera de nogal con múltiples compartimentos, cajones internos y puertas superiores. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-23.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-24",
    "title": "Vestidor modular de madera en tono nogal",
    "category": "Clósets",
    "woodType": "Madera teñida acabado nogal",
    "description": "Vestidor modular de madera en tono nogal con diseño integrado, que incluye zonas de colgado, cajoneras, estantería abierta y un espejo central con banco incorporado.",
    "detailedStory": "Vestidor modular de madera en tono nogal con diseño integrado, que incluye zonas de colgado, cajoneras, estantería abierta y un espejo central con banco incorporado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-24.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida acabado nogal",
      "Espejo de cuerpo entero",
      "Herrajes metálicos cromados",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-25",
    "title": "Amplio vestidor clásico de madera oscura",
    "category": "Clósets",
    "woodType": "Madera noble de caoba o nogal",
    "description": "Amplio vestidor clásico de madera oscura con múltiples compartimentos, cajoneras y puertas con espejo de cuerpo entero.",
    "detailedStory": "Amplio vestidor clásico de madera oscura con múltiples compartimentos, cajoneras y puertas con espejo de cuerpo entero. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-25.webp",
    "isFeatured": false,
    "features": [
      "Madera noble de caoba o nogal",
      "Espejos en puertas",
      "Herrajes metálicos",
      "Paleta: Madera oscura, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-26",
    "title": "Amplio closet de madera oscura",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Amplio closet de madera oscura con puertas abatibles y cajonera central integrada, diseñado para optimizar el almacenamiento con un estilo tradicional.",
    "detailedStory": "Amplio closet de madera oscura con puertas abatibles y cajonera central integrada, diseñado para optimizar el almacenamiento con un estilo tradicional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-26.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-27",
    "title": "Closet abierto de madera con múltiples compartimentos",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Closet abierto de madera con múltiples compartimentos, repisas, cajoneras inferiores y espacios para colgar ropa, optimizando el almacenamiento con un diseño elegante.",
    "detailedStory": "Closet abierto de madera con múltiples compartimentos, repisas, cajoneras inferiores y espacios para colgar ropa, optimizando el almacenamiento con un diseño elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-27.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Melamina tono madera",
      "Herrajes metálicos",
      "Paleta: Nogal, Marrón cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-28",
    "title": "Closet de madera de piso a techo",
    "category": "Clósets",
    "woodType": "Madera teñida",
    "description": "Closet de madera de piso a techo con puertas abatibles y múltiples cajoneras centrales, ideal para maximizar el almacenamiento con un diseño tradicional y elegante.",
    "detailedStory": "Closet de madera de piso a techo con puertas abatibles y múltiples cajoneras centrales, ideal para maximizar el almacenamiento con un diseño tradicional y elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-28.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes metálicos",
      "Paleta: Caoba, Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-29",
    "title": "Closet abierto a medida en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera teñida",
    "description": "Closet abierto a medida en tono nogal oscuro, con amplias zonas de colgado, cajoneras integradas y compartimentos superiores de almacenamiento.",
    "detailedStory": "Closet abierto a medida en tono nogal oscuro, con amplias zonas de colgado, cajoneras integradas y compartimentos superiores de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-29.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Chapa de madera",
      "Paleta: Nogal oscuro, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-30",
    "title": "Clóset de madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clóset de madera de nogal con diseño de puertas abatibles, molduras ornamentales y cajonera integrada al costado derecho.",
    "detailedStory": "Clóset de madera de nogal con diseño de puertas abatibles, molduras ornamentales y cajonera integrada al costado derecho. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-30.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes de metal satinado",
      "Paleta: Nogal oscuro, Plata",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-31",
    "title": "Closet de gran capacidad en acabado oscuro",
    "category": "Clósets",
    "woodType": "Madera oscura",
    "description": "Closet de gran capacidad en acabado oscuro con múltiples compartimentos, puertas abatibles y cajonera central equipada con tiradores metálicos modernos.",
    "detailedStory": "Closet de gran capacidad en acabado oscuro con múltiples compartimentos, puertas abatibles y cajonera central equipada con tiradores metálicos modernos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-31.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura",
      "Herrajes metálicos",
      "Paleta: Wengue, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-32",
    "title": "Closet de madera con acabado en nogal",
    "category": "Clósets",
    "woodType": "Madera enchapada en tono nogal",
    "description": "Closet de madera con acabado en nogal, diseño interior mixto con espacio para colgar y múltiples repisas, ideal para optimizar el almacenamiento.",
    "detailedStory": "Closet de madera con acabado en nogal, diseño interior mixto con espacio para colgar y múltiples repisas, ideal para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-32.webp",
    "isFeatured": false,
    "features": [
      "Madera enchapada en tono nogal",
      "Herrajes metálicos",
      "Tubos cromados para colgar ropa",
      "Paleta: Nogal, Café medio",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-33",
    "title": "Amplio clóset modular de madera",
    "category": "Clósets",
    "woodType": "Madera laminada o chapa de madera",
    "description": "Amplio clóset modular de madera con múltiples puertas verticales y compartimentos inferiores abiertos para almacenamiento de calzado.",
    "detailedStory": "Amplio clóset modular de madera con múltiples puertas verticales y compartimentos inferiores abiertos para almacenamiento de calzado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-33.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada o chapa de madera",
      "Herrajes metálicos negros",
      "Paleta: Nogal, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-34",
    "title": "Closet de madera",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet de madera con diseño integrado de puertas batientes y cajones inferiores, optimizando el espacio con líneas limpias y elegantes.",
    "detailedStory": "Closet de madera con diseño integrado de puertas batientes y cajones inferiores, optimizando el espacio con líneas limpias y elegantes. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-34.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes ocultos",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-35",
    "title": "Clásico armario de madera oscura",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clásico armario de madera oscura con puertas paneladas y cajonera central integrada, ofreciendo amplio espacio de almacenamiento.",
    "detailedStory": "Clásico armario de madera oscura con puertas paneladas y cajonera central integrada, ofreciendo amplio espacio de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-35.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-36",
    "title": "Closet modular de madera con repisas abiertas",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet modular de madera con repisas abiertas, cajoneras múltiples y un espacio central con barra para colgar, ideal para optimizar el almacenamiento.",
    "detailedStory": "Closet modular de madera con repisas abiertas, cajoneras múltiples y un espacio central con barra para colgar, ideal para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-36.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-37",
    "title": "Closet de gran formato con acabado oscuro",
    "category": "Clósets",
    "woodType": "Madera oscura",
    "description": "Closet de gran formato con acabado oscuro, que incluye amplios compartimentos superiores, puertas batientes y cajonera integrada junto a una repisa flotante.",
    "detailedStory": "Closet de gran formato con acabado oscuro, que incluye amplios compartimentos superiores, puertas batientes y cajonera integrada junto a una repisa flotante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-37.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura",
      "Herrajes metálicos",
      "Paleta: Wengue",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-38",
    "title": "Clásico armario de pared a pared en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clásico armario de pared a pared en madera de nogal, con múltiples puertas paneladas y cajonera central integrada.",
    "detailedStory": "Clásico armario de pared a pared en madera de nogal, con múltiples puertas paneladas y cajonera central integrada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-38.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos circulares",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-39",
    "title": "Closet modular de diseño moderno en acabado gris topo",
    "category": "Clósets",
    "woodType": "Madera laminada con veta",
    "description": "Closet modular de diseño moderno en acabado gris topo con textura de madera y tiradores metálicos horizontales, maximizando el espacio de almacenamiento.",
    "detailedStory": "Closet modular de diseño moderno en acabado gris topo con textura de madera y tiradores metálicos horizontales, maximizando el espacio de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-39.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada con veta",
      "Herrajes metálicos de acero cepillado",
      "Paleta: Gris topo, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-40",
    "title": "Closet modular a medida en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet modular a medida en madera de nogal, diseñado para maximizar el almacenamiento con estantes abiertos y cajoneras integradas.",
    "detailedStory": "Closet modular a medida en madera de nogal, diseñado para maximizar el almacenamiento con estantes abiertos y cajoneras integradas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-40.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Estantes modulares",
      "Paleta: Nogal oscuro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-41",
    "title": "Closet modular empotrado de piso a techo en tono oscuro",
    "category": "Clósets",
    "woodType": "Madera enchapada",
    "description": "Closet modular empotrado de piso a techo en tono oscuro, con múltiples puertas batientes y cajonera central integrada.",
    "detailedStory": "Closet modular empotrado de piso a techo en tono oscuro, con múltiples puertas batientes y cajonera central integrada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-41.webp",
    "isFeatured": false,
    "features": [
      "Madera enchapada",
      "Herrajes metálicos tubulares",
      "Paleta: Wengué oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-42",
    "title": "Closet de pared a pared",
    "category": "Clósets",
    "woodType": "Madera melamínica",
    "description": "Closet de pared a pared con acabado en negro mate y puertas abatibles, diseñado para maximizar el almacenamiento con una estética limpia y contemporánea.",
    "detailedStory": "Closet de pared a pared con acabado en negro mate y puertas abatibles, diseñado para maximizar el almacenamiento con una estética limpia y contemporánea. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-42.webp",
    "isFeatured": false,
    "features": [
      "Madera melamínica",
      "Herrajes metálicos",
      "Paleta: Negro mate",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-43",
    "title": "Closet empotrado de madera",
    "category": "Clósets",
    "woodType": "Madera laminada de nogal",
    "description": "Closet empotrado de madera con puertas superiores de almacenamiento, cajonera integrada, repisas y sección de colgar con herrajes metálicos.",
    "detailedStory": "Closet empotrado de madera con puertas superiores de almacenamiento, cajonera integrada, repisas y sección de colgar con herrajes metálicos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-43.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Herrajes metálicos visibles",
      "Tubo de colgar cromado",
      "Paleta: Nogal, Rosa pálido (paredes)",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-44",
    "title": "Clóset de madera de piso a techo",
    "category": "Clósets",
    "woodType": "Madera de nogal o chapa de madera",
    "description": "Clóset de madera de piso a techo con amplio espacio de almacenamiento, puertas abatibles superiores e inferiores, y una sección central con cajonera.",
    "detailedStory": "Clóset de madera de piso a techo con amplio espacio de almacenamiento, puertas abatibles superiores e inferiores, y una sección central con cajonera. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-44.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal o chapa de madera",
      "Herrajes metálicos plateados",
      "Paleta: Nogal oscuro, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-45",
    "title": "Clásico sistema de clóset modular de pared a pared en madera oscura",
    "category": "Clósets",
    "woodType": "Madera oscura",
    "description": "Clásico sistema de clóset modular de pared a pared en madera oscura con múltiples puertas y cajones centrales, diseñado para maximizar el almacenamiento vertical.",
    "detailedStory": "Clásico sistema de clóset modular de pared a pared en madera oscura con múltiples puertas y cajones centrales, diseñado para maximizar el almacenamiento vertical. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-45.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura",
      "Herrajes metálicos plateados",
      "Paleta: Nogal oscuro, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-46",
    "title": "Mueble organizador tipo closet de madera",
    "category": "Clósets",
    "woodType": "Madera de nogal o caoba",
    "description": "Mueble organizador tipo closet de madera con repisas fijas y cajones deslizables de alta calidad, diseñado con molduras clásicas y acabado pulido.",
    "detailedStory": "Mueble organizador tipo closet de madera con repisas fijas y cajones deslizables de alta calidad, diseñado con molduras clásicas y acabado pulido. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-46.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal o caoba",
      "Herrajes metálicos de corredera",
      "Paleta: Marrón oscuro, Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-47",
    "title": "Mueble columna de cocina en color blanco brillante",
    "category": "Clósets",
    "woodType": "Melamina blanca acabado brillante",
    "description": "Mueble columna de cocina en color blanco brillante con repisa integrada para horno tostador y gabinetes superiores, optimizando el espacio con un diseño limpio y moderno.",
    "detailedStory": "Mueble columna de cocina en color blanco brillante con repisa integrada para horno tostador y gabinetes superiores, optimizando el espacio con un diseño limpio y moderno. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-47.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca acabado brillante",
      "Acero inoxidable",
      "Cubierta de cuarzo o granito negro",
      "Paleta: Blanco brillante, Negro, Acero inoxidable",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-48",
    "title": "Closet modular de diseño clásico en madera de nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera tallada",
    "description": "Closet modular de diseño clásico en madera de nogal oscuro con múltiples secciones de almacenamiento, cajoneras integradas y puerta corrediza con espejo de cuerpo entero.",
    "detailedStory": "Closet modular de diseño clásico en madera de nogal oscuro con múltiples secciones de almacenamiento, cajoneras integradas y puerta corrediza con espejo de cuerpo entero. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-48.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Espejo biselado",
      "Herrajes metálicos clásicos",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-49",
    "title": "Closet walk-in a la medida fabricado en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet walk-in a la medida fabricado en madera de nogal, optimizado con múltiples cajones, repisas y espacios colgantes para una organización impecable.",
    "detailedStory": "Closet walk-in a la medida fabricado en madera de nogal, optimizado con múltiples cajones, repisas y espacios colgantes para una organización impecable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-49.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-50",
    "title": "Amplio closet modular empotrado en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Amplio closet modular empotrado en tono nogal oscuro con diseño abierto, estantería integrada y zapateras, complementado con grandes ventanales de marco negro.",
    "detailedStory": "Amplio closet modular empotrado en tono nogal oscuro con diseño abierto, estantería integrada y zapateras, complementado con grandes ventanales de marco negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-50.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Melamina tono oscuro",
      "Perfiles de aluminio negro",
      "Paleta: Nogal oscuro, Blanco mármol",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-51",
    "title": "Closet empotrado de madera en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet empotrado de madera en tono nogal oscuro, con estantería curva lateral, cajonera central y espacio para colgar ropa, optimizando el almacenamiento con elegancia.",
    "detailedStory": "Closet empotrado de madera en tono nogal oscuro, con estantería curva lateral, cajonera central y espacio para colgar ropa, optimizando el almacenamiento con elegancia. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-51.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Chapa de madera",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-52",
    "title": "Clóset empotrado de piso a techo",
    "category": "Clósets",
    "woodType": "Madera teñida",
    "description": "Clóset empotrado de piso a techo con puertas corredizas y paneles laterales integrados, acabado en tono nogal oscuro.",
    "detailedStory": "Clóset empotrado de piso a techo con puertas corredizas y paneles laterales integrados, acabado en tono nogal oscuro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-52.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes para puertas corredizas",
      "Paleta: Nogal oscuro, Verde claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-53",
    "title": "Vestidor moderno",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Vestidor moderno con armarios abiertos de madera en tono nogal y un espejo de cuerpo entero con marco integrado.",
    "detailedStory": "Vestidor moderno con armarios abiertos de madera en tono nogal y un espejo de cuerpo entero con marco integrado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-53.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Espejo con marco de madera",
      "Piso de porcelanato blanco",
      "Paleta: Nogal, Blanco, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-54",
    "title": "Closet de madera con acabado en nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet de madera con acabado en nogal, que combina puertas abatibles y cajoneras centrales para un almacenamiento amplio y elegante.",
    "detailedStory": "Closet de madera con acabado en nogal, que combina puertas abatibles y cajoneras centrales para un almacenamiento amplio y elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-54.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos plateados",
      "Paleta: Nogal, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-55",
    "title": "Closet de madera noble",
    "category": "Clósets",
    "woodType": "Madera noble",
    "description": "Closet de madera noble con elaboradas molduras y un acabado clásico, optimizando el espacio con entrepaños y cajoneras.",
    "detailedStory": "Closet de madera noble con elaboradas molduras y un acabado clásico, optimizando el espacio con entrepaños y cajoneras. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-55.webp",
    "isFeatured": false,
    "features": [
      "Madera noble",
      "Acabado barnizado",
      "Molduras talladas",
      "Paleta: Nogal, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-56",
    "title": "Amplio vestidor modular de madera oscura",
    "category": "Clósets",
    "woodType": "Madera oscura",
    "description": "Amplio vestidor modular de madera oscura con compartimentos abiertos, cajoneras integradas, espejo de cuerpo entero y espacios optimizados para ropa y accesorios.",
    "detailedStory": "Amplio vestidor modular de madera oscura con compartimentos abiertos, cajoneras integradas, espejo de cuerpo entero y espacios optimizados para ropa y accesorios. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-56.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura",
      "Espejo biselado",
      "Herrajes metálicos",
      "Paleta: Caoba, Blanco, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-57",
    "title": "Closet abierto empotrado en madera de tonos cálidos",
    "category": "Clósets",
    "woodType": "Madera de nogal o chapa de madera",
    "description": "Closet abierto empotrado en madera de tonos cálidos, diseñado con múltiples secciones de repisas, cajones y espacios amplios de colgado para optimizar el almacenamiento.",
    "detailedStory": "Closet abierto empotrado en madera de tonos cálidos, diseñado con múltiples secciones de repisas, cajones y espacios amplios de colgado para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-57.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal o chapa de madera",
      "Herrajes ocultos",
      "Paleta: Nogal, Marrón cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-58",
    "title": "Clóset empotrado de pared completa en madera oscura",
    "category": "Clósets",
    "woodType": "Madera oscura con acabado mate",
    "description": "Clóset empotrado de pared completa en madera oscura con puertas batientes y múltiples compartimentos de almacenamiento.",
    "detailedStory": "Clóset empotrado de pared completa en madera oscura con puertas batientes y múltiples compartimentos de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-58.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura con acabado mate",
      "Herrajes de metal",
      "Bisagras metálicas",
      "Paleta: Wengue, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-59",
    "title": "Closet de madera de alta calidad",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Closet de madera de alta calidad con múltiples puertas de panel moldeado y cajoneras centrales, diseñado a la medida para aprovechar espacios con techos inclinados.",
    "detailedStory": "Closet de madera de alta calidad con múltiples puertas de panel moldeado y cajoneras centrales, diseñado a la medida para aprovechar espacios con techos inclinados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-59.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos",
      "Paleta: Caoba, Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-60",
    "title": "Closet modular de madera",
    "category": "Clósets",
    "woodType": "Chapa de madera",
    "description": "Closet modular de madera con diseño integrado que combina espacios para colgar, cajoneras múltiples y repisas abiertas.",
    "detailedStory": "Closet modular de madera con diseño integrado que combina espacios para colgar, cajoneras múltiples y repisas abiertas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-60.webp",
    "isFeatured": false,
    "features": [
      "Chapa de madera",
      "Madera natural",
      "Tubo colgador metálico",
      "Paleta: Madera natural, Roble, Miel",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-61",
    "title": "Closet de piso a techo",
    "category": "Clósets",
    "woodType": "Madera estriada con tinte nogal",
    "description": "Closet de piso a techo con puertas corredizas y acabado de madera en tono nogal, diseñado para maximizar el espacio de almacenamiento con un estilo moderno y sobrio.",
    "detailedStory": "Closet de piso a techo con puertas corredizas y acabado de madera en tono nogal, diseñado para maximizar el espacio de almacenamiento con un estilo moderno y sobrio. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-61.webp",
    "isFeatured": false,
    "features": [
      "Madera estriada con tinte nogal",
      "Herrajes para puertas corredizas",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-62",
    "title": "Closet empotrado a medida en tono nogal",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet empotrado a medida en tono nogal con múltiples compartimentos, cajoneras integradas y barras colgadoras para optimizar el espacio de almacenamiento.",
    "detailedStory": "Closet empotrado a medida en tono nogal con múltiples compartimentos, cajoneras integradas y barras colgadoras para optimizar el espacio de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-62.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Tubos colgadores metálicos",
      "Herrajes de cajones",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-63",
    "title": "Closet de piso a techo en chapa de madera",
    "category": "Clósets",
    "woodType": "Chapa de madera con veta horizontal",
    "description": "Closet de piso a techo en chapa de madera con puertas corredizas centrales y módulos de cajonera y repisas expuestas a los costados, optimizando el espacio con un diseño sobrio y elegante.",
    "detailedStory": "Closet de piso a techo en chapa de madera con puertas corredizas centrales y módulos de cajonera y repisas expuestas a los costados, optimizando el espacio con un diseño sobrio y elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-63.webp",
    "isFeatured": false,
    "features": [
      "Chapa de madera con veta horizontal",
      "Herrajes corredizos ocultos",
      "Melamina tono nogal",
      "Paleta: Nogal, Madera oscura",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-64",
    "title": "Closet modular de diseño contemporáneo fabricado en chapa de madera",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Closet modular de diseño contemporáneo fabricado en chapa de madera con múltiples cajoneras y espacios abiertos.",
    "detailedStory": "Closet modular de diseño contemporáneo fabricado en chapa de madera con múltiples cajoneras y espacios abiertos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-64.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Chapa de nogal",
      "Herrajes ocultos",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-65",
    "title": "Clóset abierto empotrado en tono nogal",
    "category": "Clósets",
    "woodType": "Madera laminada de nogal",
    "description": "Clóset abierto empotrado en tono nogal con amplios espacios de guardado, zapateras y barras para colgar, integrado a un pasillo con piso de mármol.",
    "detailedStory": "Clóset abierto empotrado en tono nogal con amplios espacios de guardado, zapateras y barras para colgar, integrado a un pasillo con piso de mármol. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-65.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada de nogal",
      "Pisos de mármol blanco",
      "Riel metálico",
      "Paleta: Nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-66",
    "title": "Closet de diseño abierto en tono madera nogal",
    "category": "Clósets",
    "woodType": "Melamina tono madera",
    "description": "Closet de diseño abierto en tono madera nogal, equipado con múltiples espacios de colgado, repisas y cajoneras para una óptima organización.",
    "detailedStory": "Closet de diseño abierto en tono madera nogal, equipado con múltiples espacios de colgado, repisas y cajoneras para una óptima organización. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-66.webp",
    "isFeatured": false,
    "features": [
      "Melamina tono madera",
      "Tubos metálicos para colgar",
      "Herrajes metálicos",
      "Paleta: Madera nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-67",
    "title": "Vestidor modular esquinero de madera en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera teñida",
    "description": "Vestidor modular esquinero de madera en tono nogal oscuro, equipado con barras para colgar ropa, cajoneras integradas y repisas abiertas para optimizar el almacenamiento.",
    "detailedStory": "Vestidor modular esquinero de madera en tono nogal oscuro, equipado con barras para colgar ropa, cajoneras integradas y repisas abiertas para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-67.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes metálicos cromados",
      "Melamina acabado madera",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-68",
    "title": "Sistema de clóset modular en madera de tonos cálidos",
    "category": "Clósets",
    "woodType": "Madera contrachapada",
    "description": "Sistema de clóset modular en madera de tonos cálidos, con amplios espacios para colgar, cajoneras y estantería integrada.",
    "detailedStory": "Sistema de clóset modular en madera de tonos cálidos, con amplios espacios para colgar, cajoneras y estantería integrada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-68.webp",
    "isFeatured": false,
    "features": [
      "Madera contrachapada",
      "Melamina tono madera",
      "Paleta: Nogal, Marrón medio",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-69",
    "title": "Clóset de madera de nogal de gran capacidad",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clóset de madera de nogal de gran capacidad con puertas altas y compartimentos inferiores abiertos para almacenamiento versátil.",
    "detailedStory": "Clóset de madera de nogal de gran capacidad con puertas altas y compartimentos inferiores abiertos para almacenamiento versátil. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-69.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos negros",
      "Paleta: Nogal cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-70",
    "title": "Clóset en L de diseño moderno",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Clóset en L de diseño moderno con acabado en madera oscura, integrado con múltiples cajoneras, estantes y barras para colgar ropa.",
    "detailedStory": "Clóset en L de diseño moderno con acabado en madera oscura, integrado con múltiples cajoneras, estantes y barras para colgar ropa. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-70.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-71",
    "title": "Closet de madera",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet de madera con diseño funcional que incluye puertas abatibles y cajonera integrada, optimizando el espacio con un estilo moderno y cálido.",
    "detailedStory": "Closet de madera con diseño funcional que incluye puertas abatibles y cajonera integrada, optimizando el espacio con un estilo moderno y cálido. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-71.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos",
      "Paleta: Nogal, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-72",
    "title": "Clóset moderno de suelo a techo en color blanco mate",
    "category": "Clósets",
    "woodType": "Melamina blanca mate",
    "description": "Clóset moderno de suelo a techo en color blanco mate con puertas batientes y espejos centrales integrados.",
    "detailedStory": "Clóset moderno de suelo a techo en color blanco mate con puertas batientes y espejos centrales integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-72.webp",
    "isFeatured": false,
    "features": [
      "Melamina blanca mate",
      "Espejos centrales",
      "Tiradores metálicos alargados",
      "Paleta: Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-73",
    "title": "Closet modular de madera con acabado en nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet modular de madera con acabado en nogal oscuro, que integra amplios espacios de almacenamiento, cajoneras y una sección central abierta con repisas.",
    "detailedStory": "Closet modular de madera con acabado en nogal oscuro, que integra amplios espacios de almacenamiento, cajoneras y una sección central abierta con repisas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-73.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Chapa de madera",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-74",
    "title": "Closet empotrado de madera oscura",
    "category": "Clósets",
    "woodType": "Madera teñida",
    "description": "Closet empotrado de madera oscura con puertas paneladas y cajonera central, diseñado a la medida para aprovechar el espacio bajo el techo inclinado.",
    "detailedStory": "Closet empotrado de madera oscura con puertas paneladas y cajonera central, diseñado a la medida para aprovechar el espacio bajo el techo inclinado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-74.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes metálicos",
      "Paleta: Caoba, Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-75",
    "title": "Closet de piso a techo",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet de piso a techo con puertas corredizas y maletero superior integrado, con un acabado en madera de nogal que aporta calidez y funcionalidad.",
    "detailedStory": "Closet de piso a techo con puertas corredizas y maletero superior integrado, con un acabado en madera de nogal que aporta calidez y funcionalidad. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-75.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes corredizos",
      "Paleta: Nogal, Café",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-76",
    "title": "Pequeño vestidor o alacena",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Pequeño vestidor o alacena con repisas flotantes de madera y puerta de madera con marco integrado, ideal para optimizar espacios de almacenamiento.",
    "detailedStory": "Pequeño vestidor o alacena con repisas flotantes de madera y puerta de madera con marco integrado, ideal para optimizar espacios de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-76.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-77",
    "title": "Closet de esquina modular en madera con acabado natural",
    "category": "Clósets",
    "woodType": "Madera contrachapada con chapa de madera",
    "description": "Closet de esquina modular en madera con acabado natural, diseñado con una combinación de gabinetes cerrados, cajoneras y estantería abierta para máxima optimización del espacio.",
    "detailedStory": "Closet de esquina modular en madera con acabado natural, diseñado con una combinación de gabinetes cerrados, cajoneras y estantería abierta para máxima optimización del espacio. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-77.webp",
    "isFeatured": false,
    "features": [
      "Madera contrachapada con chapa de madera",
      "Herrajes ocultos",
      "Paleta: Nogal claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-78",
    "title": "Amplio vestidor modular de madera en tono nogal oscuro",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Amplio vestidor modular de madera en tono nogal oscuro, con múltiples compartimentos abiertos, cajoneras y barras colgadoras integradas.",
    "detailedStory": "Amplio vestidor modular de madera en tono nogal oscuro, con múltiples compartimentos abiertos, cajoneras y barras colgadoras integradas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-78.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-79",
    "title": "Closet de pared a pared",
    "category": "Clósets",
    "woodType": "Melamina acabado brillante",
    "description": "Closet de pared a pared con diseño minimalista en acabado gris brillante, que combina amplios compartimentos cerrados, cajoneras y secciones abiertas para optimizar el almacenamiento.",
    "detailedStory": "Closet de pared a pared con diseño minimalista en acabado gris brillante, que combina amplios compartimentos cerrados, cajoneras y secciones abiertas para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-79.webp",
    "isFeatured": false,
    "features": [
      "Melamina acabado brillante",
      "Herrajes ocultos",
      "Estantes flotantes",
      "Paleta: Gris claro, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-80",
    "title": "Closet de pared a pared en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Closet de pared a pared en madera de nogal con puertas corredizas y gabinetes superiores abatibles, optimizando el almacenamiento con entrepaños y cajoneras internas.",
    "detailedStory": "Closet de pared a pared en madera de nogal con puertas corredizas y gabinetes superiores abatibles, optimizando el almacenamiento con entrepaños y cajoneras internas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-80.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Melamina",
      "Paleta: Nogal, Café oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-81",
    "title": "Clóset empotrado de madera en tono nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clóset empotrado de madera en tono nogal con puertas abatibles y cajonera central, equipado con tiradores metálicos modernos.",
    "detailedStory": "Clóset empotrado de madera en tono nogal con puertas abatibles y cajonera central, equipado con tiradores metálicos modernos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-81.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos plateados",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-82",
    "title": "Closet de madera de tono nogal con diseño integral",
    "category": "Clósets",
    "woodType": "Madera enchapada",
    "description": "Closet de madera de tono nogal con diseño integral, que incluye un nicho central para televisión y un módulo inferior de múltiples cajones.",
    "detailedStory": "Closet de madera de tono nogal con diseño integral, que incluye un nicho central para televisión y un módulo inferior de múltiples cajones. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-82.webp",
    "isFeatured": false,
    "features": [
      "Madera enchapada",
      "Herrajes ocultos",
      "Paleta: Nogal oscuro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-83",
    "title": "Closet modular esquinero de gran capacidad en acabado de madera oscura",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet modular esquinero de gran capacidad en acabado de madera oscura, equipado con múltiples cajones, repisas abiertas y barras para colgar ropa.",
    "detailedStory": "Closet modular esquinero de gran capacidad en acabado de madera oscura, equipado con múltiples cajones, repisas abiertas y barras para colgar ropa. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-83.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Tubos colgadores de metal",
      "Paleta: Nogal oscuro, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-84",
    "title": "Closet de madera con acabado en tono nogal",
    "category": "Clósets",
    "woodType": "Madera laminada",
    "description": "Closet de madera con acabado en tono nogal, que incluye múltiples cajones y barras organizadoras metálicas.",
    "detailedStory": "Closet de madera con acabado en tono nogal, que incluye múltiples cajones y barras organizadoras metálicas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-84.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-85",
    "title": "Clóset moderno de piso a techo en acabado de madera oscura",
    "category": "Clósets",
    "woodType": "Madera oscura con chapa",
    "description": "Clóset moderno de piso a techo en acabado de madera oscura con múltiples puertas superiores y cajoneras inferiores con tiradores metálicos.",
    "detailedStory": "Clóset moderno de piso a techo en acabado de madera oscura con múltiples puertas superiores y cajoneras inferiores con tiradores metálicos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-85.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura con chapa",
      "Herrajes metálicos plateados",
      "Paleta: Wengue, Gris oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-86",
    "title": "Pared revestida en paneles de madera",
    "category": "Clósets",
    "woodType": "Paneles de madera revestida",
    "description": "Pared revestida en paneles de madera con puertas integradas de diseño minimalista, ideal para maximizar la continuidad visual y ocultar espacios de almacenamiento.",
    "detailedStory": "Pared revestida en paneles de madera con puertas integradas de diseño minimalista, ideal para maximizar la continuidad visual y ocultar espacios de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-86.webp",
    "isFeatured": false,
    "features": [
      "Paneles de madera revestida",
      "Herrajes metálicos",
      "Paleta: Marrón nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-87",
    "title": "Closet de piso a techo en chapa de madera",
    "category": "Clósets",
    "woodType": "Chapa de madera natural",
    "description": "Closet de piso a techo en chapa de madera con diseño integrado que combina puertas batientes, cajonera frontal y puertas corredizas para optimizar el espacio con elegancia y funcionalidad.",
    "detailedStory": "Closet de piso a techo en chapa de madera con diseño integrado que combina puertas batientes, cajonera frontal y puertas corredizas para optimizar el espacio con elegancia y funcionalidad. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-87.webp",
    "isFeatured": false,
    "features": [
      "Chapa de madera natural",
      "Herrajes ocultos",
      "Guías para puertas corredizas",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-88",
    "title": "Closet empotrado de madera",
    "category": "Clósets",
    "woodType": "Madera laminada texturizada",
    "description": "Closet empotrado de madera con acabado texturizado tipo nogal, diseñado con puertas batientes y cajonera central integrada.",
    "detailedStory": "Closet empotrado de madera con acabado texturizado tipo nogal, diseñado con puertas batientes y cajonera central integrada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-88.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada texturizada",
      "Herrajes metálicos",
      "Paleta: Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-89",
    "title": "Clóset moderno de gran formato",
    "category": "Clósets",
    "woodType": "Madera natural",
    "description": "Clóset moderno de gran formato con puertas corredizas y acabado en madera de nogal, diseñado para integrarse perfectamente a la arquitectura interior.",
    "detailedStory": "Clóset moderno de gran formato con puertas corredizas y acabado en madera de nogal, diseñado para integrarse perfectamente a la arquitectura interior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-89.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Chapa de nogal",
      "Paleta: Nogal, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "CLOSET-90",
    "title": "Clóset moderno de piso a techo en madera de nogal",
    "category": "Clósets",
    "woodType": "Madera de nogal",
    "description": "Clóset moderno de piso a techo en madera de nogal con puertas acanaladas y combinación de zona de colgado y repisas interiores.",
    "detailedStory": "Clóset moderno de piso a techo en madera de nogal con puertas acanaladas y combinación de zona de colgado y repisas interiores. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/closet/closet-90.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Diseño acanalado",
      "Paleta: Nogal natural, Madera cálida",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-01-D",
    "title": "Puerta interior de madera",
    "category": "Puertas",
    "woodType": "Madera laminada o chapa de madera",
    "description": "Puerta interior de madera con acabado oscuro en tonos nogal y diseño de paneles horizontales, equipada con tirador metálico.",
    "detailedStory": "Puerta interior de madera con acabado oscuro en tonos nogal y diseño de paneles horizontales, equipada con tirador metálico. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-01_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada o chapa de madera",
      "Herrajes metálicos",
      "Paleta: Marrón oscuro, Grisáceo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-02-D",
    "title": "Puerta principal de madera en tono nogal",
    "category": "Puertas",
    "woodType": "Madera",
    "description": "Puerta principal de madera en tono nogal con diseño horizontal, manillón de acero inoxidable y ventanales laterales integrados.",
    "detailedStory": "Puerta principal de madera en tono nogal con diseño horizontal, manillón de acero inoxidable y ventanales laterales integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-02_d.webp",
    "isFeatured": true,
    "features": [
      "Madera",
      "Vidrio templado",
      "Acero inoxidable",
      "Paleta: Nogal, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-03-D",
    "title": "Puerta de entrada principal de madera",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Puerta de entrada principal de madera con acabado en nogal, diseño contemporáneo con inserción vertical de vidrio y manillón cilíndrico de acero inoxidable.",
    "detailedStory": "Puerta de entrada principal de madera con acabado en nogal, diseño contemporáneo con inserción vertical de vidrio y manillón cilíndrico de acero inoxidable. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-03_d.webp",
    "isFeatured": true,
    "features": [
      "Madera natural",
      "Herrajes de acero inoxidable",
      "Vidrio templado",
      "Paleta: Nogal, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-04-D",
    "title": "Puerta de entrada de diseño moderno en madera",
    "category": "Puertas",
    "woodType": "Madera laminada",
    "description": "Puerta de entrada de diseño moderno en madera con vetas horizontales, tirador tubular vertical de acero y una elegante franja lateral de vidrio traslúcido.",
    "detailedStory": "Puerta de entrada de diseño moderno en madera con vetas horizontales, tirador tubular vertical de acero y una elegante franja lateral de vidrio traslúcido. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-04_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada",
      "Vidrio esmerilado",
      "Herrajes de acero inoxidable",
      "Paleta: Marrón nogal, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-05-D",
    "title": "Puerta de doble hoja de madera finamente tallada",
    "category": "Puertas",
    "woodType": "Madera tallada",
    "description": "Puerta de doble hoja de madera finamente tallada con paneles geométricos ornamentales y un elaborado marco arquitectónico esculpido.",
    "detailedStory": "Puerta de doble hoja de madera finamente tallada con paneles geométricos ornamentales y un elaborado marco arquitectónico esculpido. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-05_d.webp",
    "isFeatured": true,
    "features": [
      "Madera tallada",
      "Madera natural",
      "Paleta: Madera natural, Marrón claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-06-D",
    "title": "Puertas de interior de diseño moderno",
    "category": "Puertas",
    "woodType": "Madera laminada",
    "description": "Puertas de interior de diseño moderno con acabado de madera texturizada y tiradores metálicos, ideales para optimizar espacios contemporáneos.",
    "detailedStory": "Puertas de interior de diseño moderno con acabado de madera texturizada y tiradores metálicos, ideales para optimizar espacios contemporáneos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-06_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada",
      "Herrajes de acero inoxidable",
      "Paleta: Gris oscuro, Roble grisáceo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-07-D",
    "title": "Par de puertas interiores de diseño contemporáneo en acabado de madera oscura",
    "category": "Puertas",
    "woodType": "Madera de ingeniería",
    "description": "Par de puertas interiores de diseño contemporáneo en acabado de madera oscura con vetas horizontales y sutiles ranuras decorativas.",
    "detailedStory": "Par de puertas interiores de diseño contemporáneo en acabado de madera oscura con vetas horizontales y sutiles ranuras decorativas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-07_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de ingeniería",
      "Chapa de madera oscura",
      "Herrajes de acero inoxidable",
      "Paleta: Gris oscuro, Nogal cenizo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-08-D",
    "title": "Puerta de interior",
    "category": "Puertas",
    "woodType": "Madera laminada o chapa de madera",
    "description": "Puerta de interior con diseño de tablones horizontales y acabado en tonos grises, complementada con marco a juego y manilla de metal.",
    "detailedStory": "Puerta de interior con diseño de tablones horizontales y acabado en tonos grises, complementada con marco a juego y manilla de metal. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-08_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada o chapa de madera",
      "Herrajes de acero inoxidable",
      "Paleta: Gris oscuro, Marrón cenizo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-09",
    "title": "Puerta principal de madera",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta principal de madera con chapa horizontal de nogal y tirador tubular de acero inoxidable de diseño contemporáneo.",
    "detailedStory": "Puerta principal de madera con chapa horizontal de nogal y tirador tubular de acero inoxidable de diseño contemporáneo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-09.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Acero inoxidable",
      "Paleta: Nogal, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-10",
    "title": "Puertas interiores batientes de diseño moderno en tono oscuro",
    "category": "Puertas",
    "woodType": "Madera oscura con veta sutil",
    "description": "Puertas interiores batientes de diseño moderno en tono oscuro con detalles horizontales sutiles, que aportan elegancia y contraste en un pasillo de tonos claros.",
    "detailedStory": "Puertas interiores batientes de diseño moderno en tono oscuro con detalles horizontales sutiles, que aportan elegancia y contraste en un pasillo de tonos claros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-10.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura con veta sutil",
      "Herrajes metálicos cromados",
      "Piso cerámico imitación madera",
      "Paleta: Wengue oscuro, Blanco perla, Gris taupe",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-11",
    "title": "Puertas interiores de diseño moderno en madera oscura",
    "category": "Puertas",
    "woodType": "Madera teñida",
    "description": "Puertas interiores de diseño moderno en madera oscura con elegantes líneas horizontales y herrajes negros, complementadas por acabados claros en paredes y pisos.",
    "detailedStory": "Puertas interiores de diseño moderno en madera oscura con elegantes líneas horizontales y herrajes negros, complementadas por acabados claros en paredes y pisos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-11.webp",
    "isFeatured": false,
    "features": [
      "Madera teñida",
      "Herrajes metálicos negros",
      "Piso de mármol",
      "Paleta: Marrón nogal, Blanco hueso, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-12",
    "title": "Puerta de madera oscura",
    "category": "Puertas",
    "woodType": "Madera oscura",
    "description": "Puerta de madera oscura con molduras clásicas y detalles tallados en relieve, ideal para interiores elegantes.",
    "detailedStory": "Puerta de madera oscura con molduras clásicas y detalles tallados en relieve, ideal para interiores elegantes. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-12.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura",
      "Acabado barnizado",
      "Paleta: Marrón oscuro, Rojo coral",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-13",
    "title": "Puerta interior de madera",
    "category": "Puertas",
    "woodType": "Madera laminada",
    "description": "Puerta interior de madera con veta horizontal marcada y un acabado cálido, equipada con tirador metálico moderno.",
    "detailedStory": "Puerta interior de madera con veta horizontal marcada y un acabado cálido, equipada con tirador metálico moderno. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-13.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos cromados",
      "Paleta: Nogal, Marrón",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-14",
    "title": "Puerta principal de madera maciza",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta principal de madera maciza con detalles verticales y herrajes metálicos oscuros, enmarcada por un porche exterior en proceso de remodelación.",
    "detailedStory": "Puerta principal de madera maciza con detalles verticales y herrajes metálicos oscuros, enmarcada por un porche exterior en proceso de remodelación. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-14.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes de hierro forjado",
      "Paleta: Marrón nogal, Rojo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-15",
    "title": "Puerta de madera en tono nogal",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta de madera en tono nogal con diseño de líneas horizontales y un tirador metálico moderno, ideal para interiores contemporáneos.",
    "detailedStory": "Puerta de madera en tono nogal con diseño de líneas horizontales y un tirador metálico moderno, ideal para interiores contemporáneos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-15.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal, Plata",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-16",
    "title": "Puerta de madera oscura",
    "category": "Puertas",
    "woodType": "Madera laminada",
    "description": "Puerta de madera oscura con diseño ranurado horizontal y marco a juego, equipada con tirador metálico y cerradura.",
    "detailedStory": "Puerta de madera oscura con diseño ranurado horizontal y marco a juego, equipada con tirador metálico y cerradura. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-16.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos cromados",
      "Paleta: Gris oscuro, Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-17",
    "title": "Puerta interior de madera oscura",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta interior de madera oscura con diseño clásico de paneles moldeados y tallados decorativos, ideal para ambientes elegantes y tradicionales.",
    "detailedStory": "Puerta interior de madera oscura con diseño clásico de paneles moldeados y tallados decorativos, ideal para ambientes elegantes y tradicionales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-17.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Acabado barnizado",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-18",
    "title": "Puerta de madera maciza",
    "category": "Puertas",
    "woodType": "Madera tallada",
    "description": "Puerta de madera maciza con un relieve tallado central de un caballo, enmarcada en una estructura de piedra rústica.",
    "detailedStory": "Puerta de madera maciza con un relieve tallado central de un caballo, enmarcada en una estructura de piedra rústica. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-18.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Herrajes metálicos",
      "Paleta: Caoba, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-19",
    "title": "Puerta de madera",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Puerta de madera con diseño lineal y acabado en tono nogal, equipada con manilla metálica moderna.",
    "detailedStory": "Puerta de madera con diseño lineal y acabado en tono nogal, equipada con manilla metálica moderna. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-19.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos",
      "Paleta: Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-20",
    "title": "Puerta de diseño moderno en madera",
    "category": "Puertas",
    "woodType": "Madera natural con veta horizontal",
    "description": "Puerta de diseño moderno en madera con veta horizontal y marco a juego, que aporta calidez y elegancia contemporánea al espacio.",
    "detailedStory": "Puerta de diseño moderno en madera con veta horizontal y marco a juego, que aporta calidez y elegancia contemporánea al espacio. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-20.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta horizontal",
      "Herrajes metálicos plateados",
      "Paleta: Nogal, Marrón cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-21",
    "title": "Puerta de madera",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Puerta de madera con vetas horizontales destacada por dos paneles verticales translúcidos y tirador metálico, aportando un diseño moderno y elegante a la estancia.",
    "detailedStory": "Puerta de madera con vetas horizontales destacada por dos paneles verticales translúcidos y tirador metálico, aportando un diseño moderno y elegante a la estancia. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-21.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Vidrio esmerilado",
      "Herrajes metálicos cromados",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-22",
    "title": "Puerta principal de diseño moderno en madera",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Puerta principal de diseño moderno en madera con paneles horizontales y una llamativa estructura metálica vertical en contraste.",
    "detailedStory": "Puerta principal de diseño moderno en madera con paneles horizontales y una llamativa estructura metálica vertical en contraste. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-22.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Metal negro",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-23",
    "title": "Puerta de entrada de madera oscura",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta de entrada de madera oscura con tirador vertical largo de acero inoxidable, enmarcada por una fachada de piedra texturizada.",
    "detailedStory": "Puerta de entrada de madera oscura con tirador vertical largo de acero inoxidable, enmarcada por una fachada de piedra texturizada. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-23.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes de acero inoxidable",
      "Piedra slate para revestimiento",
      "Paleta: Nogal, Marrón oscuro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-24",
    "title": "Puerta pivotante de madera natural",
    "category": "Puertas",
    "woodType": "Madera natural con veta marcada",
    "description": "Puerta pivotante de madera natural con vetas horizontales pronunciadas y tirador vertical negro, ideal para una entrada principal moderna y elegante.",
    "detailedStory": "Puerta pivotante de madera natural con vetas horizontales pronunciadas y tirador vertical negro, ideal para una entrada principal moderna y elegante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-24.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta marcada",
      "Herrajes metálicos negros",
      "Paleta: Madera nogal, Negro mate",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-25",
    "title": "Puerta principal de diseño moderno",
    "category": "Puertas",
    "woodType": "Madera laminada o chapa de madera",
    "description": "Puerta principal de diseño moderno con acabado en madera texturizada, marco perimetral a juego y tirador tubular vertical en color negro.",
    "detailedStory": "Puerta principal de diseño moderno con acabado en madera texturizada, marco perimetral a juego y tirador tubular vertical en color negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-25.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada o chapa de madera",
      "Herrajes metálicos negros",
      "Paleta: Madera de nogal, Negro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-26",
    "title": "Clásico armario de pared de madera oscura",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Clásico armario de pared de madera oscura con molduras detalladas y cajones inferiores integrados.",
    "detailedStory": "Clásico armario de pared de madera oscura con molduras detalladas y cajones inferiores integrados. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-26.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-27",
    "title": "Puerta de madera",
    "category": "Puertas",
    "woodType": "Madera laminada",
    "description": "Puerta de madera con acabado tipo nogal y veta horizontal, equipada con manilla metálica moderna.",
    "detailedStory": "Puerta de madera con acabado tipo nogal y veta horizontal, equipada con manilla metálica moderna. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-27.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada",
      "Herrajes metálicos",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-28",
    "title": "Puerta interior de madera",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta interior de madera con acabado en nogal y vetas horizontales, enmarcada con chambrana a juego y manilla metálica moderna.",
    "detailedStory": "Puerta interior de madera con acabado en nogal y vetas horizontales, enmarcada con chambrana a juego y manilla metálica moderna. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-28.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos cromados",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-29",
    "title": "Par de puertas interiores de madera con marco integrado",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Par de puertas interiores de madera con marco integrado, diseñadas con un acabado en tono nogal que aporta calidez y elegancia a la estancia.",
    "detailedStory": "Par de puertas interiores de madera con marco integrado, diseñadas con un acabado en tono nogal que aporta calidez y elegancia a la estancia. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-29.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTA-30",
    "title": "Puerta de entrada principal en madera natural",
    "category": "Puertas",
    "woodType": "Madera natural teñida",
    "description": "Puerta de entrada principal en madera natural con detalles verticales acanalados, un inserto de cristal lateral y herrajes oscuros.",
    "detailedStory": "Puerta de entrada principal en madera natural con detalles verticales acanalados, un inserto de cristal lateral y herrajes oscuros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puerta-30.webp",
    "isFeatured": false,
    "features": [
      "Madera natural teñida",
      "Vidrio templado",
      "Herrajes de hierro forjado",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTAS_AHUALULCO_0",
    "title": "Puerta de madera",
    "category": "Puertas",
    "woodType": "Madera natural con veta horizontal",
    "description": "Puerta de madera con acabado de veta horizontal y marco integrado, complementada con un tirador minimalista en color negro.",
    "detailedStory": "Puerta de madera con acabado de veta horizontal y marco integrado, complementada con un tirador minimalista en color negro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puertas_ahualulco_0.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta horizontal",
      "Herrajes metálicos negros",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTAS_AHUALULCO_10",
    "title": "Puerta principal de madera noble",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta principal de madera noble con molduras ornamentadas, panel superior de cristal y herrería de fierro forjado con diseño clásico.",
    "detailedStory": "Puerta principal de madera noble con molduras ornamentadas, panel superior de cristal y herrería de fierro forjado con diseño clásico. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puertas_ahualulco_10.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrería decorativa",
      "Vidrio templado",
      "Paleta: Madera natural, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTAS_AHUALULCO_2",
    "title": "Puerta de madera en tono nogal",
    "category": "Puertas",
    "woodType": "Madera de nogal",
    "description": "Puerta de madera en tono nogal con diseño de líneas horizontales y manija metálica moderna, ideal para interiores contemporáneos.",
    "detailedStory": "Puerta de madera en tono nogal con diseño de líneas horizontales y manija metálica moderna, ideal para interiores contemporáneos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puertas_ahualulco_2.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos cromados",
      "Paleta: Nogal, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTAS_AHUALULCO_6",
    "title": "Puerta de interior",
    "category": "Puertas",
    "woodType": "Madera con chapa de nogal",
    "description": "Puerta de interior con acabado en madera de nogal de veta horizontal y diseño minimalista. Equipada con herrajes en negro mate que aportan un contraste elegante y contemporáneo.",
    "detailedStory": "Puerta de interior con acabado en madera de nogal de veta horizontal y diseño minimalista. Equipada con herrajes en negro mate que aportan un contraste elegante y contemporáneo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puertas_ahualulco_6.webp",
    "isFeatured": false,
    "features": [
      "Madera con chapa de nogal",
      "Herrajes metálicos en negro mate",
      "Paleta: Nogal, Negro, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "PUERTAS_AHUALULCO_9",
    "title": "Puerta de madera en tono nogal",
    "category": "Puertas",
    "woodType": "Madera natural",
    "description": "Puerta de madera en tono nogal con un diseño moderno de paneles horizontales y cuatro inserciones de vidrio esmerilado.",
    "detailedStory": "Puerta de madera en tono nogal con un diseño moderno de paneles horizontales y cuatro inserciones de vidrio esmerilado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/puertas/puertas_ahualulco_9.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Vidrio esmerilado",
      "Herrajes metálicos",
      "Paleta: Nogal, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-01-D",
    "title": "Centro de entretenimiento integral con panel para TV",
    "category": "Muebles",
    "woodType": "Madera laminada con veta horizontal",
    "description": "Centro de entretenimiento integral con panel para TV, estanterías laterales y mueble bajo con múltiples compartimentos, en acabado madera veteada y acentos negros.",
    "detailedStory": "Centro de entretenimiento integral con panel para TV, estanterías laterales y mueble bajo con múltiples compartimentos, en acabado madera veteada y acentos negros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-01_d.webp",
    "isFeatured": true,
    "features": [
      "Madera laminada con veta horizontal",
      "Melamina o laca negra mate",
      "Panel para TV integrado",
      "Paleta: Nogal, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-02-D",
    "title": "Mueble de entretenimiento y biblioteca a medida",
    "category": "Muebles",
    "woodType": "Madera lacada o acabado en laca mate",
    "description": "Mueble de entretenimiento y biblioteca a medida con generosa capacidad de almacenamiento inferior y estantería abierta superior. Su acabado en tono neutro y molduras perimetrales aportan una elegancia atemporal y versátil.",
    "detailedStory": "Mueble de entretenimiento y biblioteca a medida con generosa capacidad de almacenamiento inferior y estantería abierta superior. Su acabado en tono neutro y molduras perimetrales aportan una elegancia atemporal y versátil. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-02_d.webp",
    "isFeatured": true,
    "features": [
      "Madera lacada o acabado en laca mate",
      "Tiradores metálicos tipo anilla",
      "Molduras decorativas de madera",
      "Paleta: Beige arena, Gris cálido (greige), Níquel satinado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-03-D",
    "title": "Estantería empotrada de madera a medida",
    "category": "Muebles",
    "woodType": "Madera natural con acabado teñido",
    "description": "Estantería empotrada de madera a medida con múltiples compartimentos y gabinetes inferiores de almacenamiento, diseñada para optimizar un espacio de estudio o biblioteca.",
    "detailedStory": "Estantería empotrada de madera a medida con múltiples compartimentos y gabinetes inferiores de almacenamiento, diseñada para optimizar un espacio de estudio o biblioteca. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-03_d.webp",
    "isFeatured": true,
    "features": [
      "Madera natural con acabado teñido",
      "Marcos de ventanas metálicos negros",
      "Pisos de madera",
      "Paleta: Madera clara / Roble, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-04-D",
    "title": "Mueble de pared integral en madera de nogal",
    "category": "Muebles",
    "woodType": "Madera de nogal",
    "description": "Mueble de pared integral en madera de nogal con diseño acanalado, repisas laterales abiertas y chimenea eléctrica integrada al centro.",
    "detailedStory": "Mueble de pared integral en madera de nogal con diseño acanalado, repisas laterales abiertas y chimenea eléctrica integrada al centro. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-04_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Acabado acanalado vertical",
      "Cristal templado (chimenea)",
      "Paleta: Nogal oscuro, Rojo fuego (chimenea), Blanco (pared)",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-05-D",
    "title": "Librero y mueble de almacenamiento empotrado de pared a pared en madera de nogal",
    "category": "Muebles",
    "woodType": "Madera de nogal",
    "description": "Librero y mueble de almacenamiento empotrado de pared a pared en madera de nogal, con compartimentos abiertos asimétricos y gabinetes inferiores con puertas y tiradores metálicos.",
    "detailedStory": "Librero y mueble de almacenamiento empotrado de pared a pared en madera de nogal, con compartimentos abiertos asimétricos y gabinetes inferiores con puertas y tiradores metálicos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-05_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal, Madera natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-06-D",
    "title": "Mueble modular integral de piso a techo en acabado madera oscura",
    "category": "Muebles",
    "woodType": "Melamina con veta de madera",
    "description": "Mueble modular integral de piso a techo en acabado madera oscura, diseñado a medida para combinar clóset de almacenamiento, centro de entretenimiento y zona de escritorio con cajoneras.",
    "detailedStory": "Mueble modular integral de piso a techo en acabado madera oscura, diseñado a medida para combinar clóset de almacenamiento, centro de entretenimiento y zona de escritorio con cajoneras. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-06_d.webp",
    "isFeatured": true,
    "features": [
      "Melamina con veta de madera",
      "Tableros de MDF",
      "Tiradores integrados (uñeros/gola)",
      "Paleta: Nogal oscuro, Café chocolate",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-07-D",
    "title": "Mueble empotrado multifuncional de madera clara",
    "category": "Muebles",
    "woodType": "Madera de roble natural",
    "description": "Mueble empotrado multifuncional de madera clara con estantería superior, espacio central para televisión y cajonera inferior de almacenamiento.",
    "detailedStory": "Mueble empotrado multifuncional de madera clara con estantería superior, espacio central para televisión y cajonera inferior de almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-07_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de roble natural",
      "Herrajes ocultos",
      "Molduras decorativas",
      "Paleta: Roble claro, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-08-D",
    "title": "Mueble multifuncional empotrado de piso a techo",
    "category": "Muebles",
    "woodType": "Chapa de madera o melamina tono nogal",
    "description": "Mueble multifuncional empotrado de piso a techo, diseñado con nicho central para pantalla, módulo inferior de cajoneras y amplios armarios laterales con frentes lisos y limpios.",
    "detailedStory": "Mueble multifuncional empotrado de piso a techo, diseñado con nicho central para pantalla, módulo inferior de cajoneras y amplios armarios laterales con frentes lisos y limpios. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-08_d.webp",
    "isFeatured": true,
    "features": [
      "Chapa de madera o melamina tono nogal",
      "Uñeros o tiradores integrados tipo gola",
      "Paleta: Nogal, Marrón cálido, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-09",
    "title": "Mueble de almacenamiento",
    "category": "Muebles",
    "woodType": "Madera con acabado barnizado",
    "description": "Mueble de almacenamiento con diseño tradicional y puertas de tablero rebajado, rematado con una elegante cubierta de cuarzo veteado. Una pieza funcional que aporta calidez y sofisticación a cualquier espacio interior.",
    "detailedStory": "Mueble de almacenamiento con diseño tradicional y puertas de tablero rebajado, rematado con una elegante cubierta de cuarzo veteado. Una pieza funcional que aporta calidez y sofisticación a cualquier espacio interior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-09.webp",
    "isFeatured": false,
    "features": [
      "Madera con acabado barnizado",
      "Cubierta de cuarzo con veteado",
      "Herrajes metálicos",
      "Paleta: Caoba, Blanco, Dorado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-10",
    "title": "Cornisa decorativa de madera oscura",
    "category": "Muebles",
    "woodType": "Madera maciza",
    "description": "Cornisa decorativa de madera oscura con detalles tallados estilo clásico, ideal para enmarcar zonas superiores o muebles de cocina.",
    "detailedStory": "Cornisa decorativa de madera oscura con detalles tallados estilo clásico, ideal para enmarcar zonas superiores o muebles de cocina. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-10.webp",
    "isFeatured": false,
    "features": [
      "Madera maciza",
      "Moldeados decorativos",
      "Paleta: Café oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-11",
    "title": "Espacio interior revestido",
    "category": "Muebles",
    "woodType": "Madera estriada",
    "description": "Espacio interior revestido con paneles de madera estriada y muro de acento en mármol, complementado con una consola flotante.",
    "detailedStory": "Espacio interior revestido con paneles de madera estriada y muro de acento en mármol, complementado con una consola flotante. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-11.webp",
    "isFeatured": false,
    "features": [
      "Madera estriada",
      "Mármol blanco veteado",
      "Metal negro",
      "Paleta: Nogal, Blanco, Gris",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-12",
    "title": "Mesa de noche de estilo clásico",
    "category": "Muebles",
    "woodType": "Madera tallada",
    "description": "Mesa de noche de estilo clásico con tres cajones y elaborados tallados laterales en madera de tonos cálidos.",
    "detailedStory": "Mesa de noche de estilo clásico con tres cajones y elaborados tallados laterales en madera de tonos cálidos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-12.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Herrajes metálicos dorados",
      "Paleta: Nogal, Dorado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-13",
    "title": "Gran mueble de pared en madera natural",
    "category": "Muebles",
    "woodType": "Madera natural sin terminar",
    "description": "Gran mueble de pared en madera natural con estantería abierta y gabinetes inferiores integrados, diseñado a la medida para optimizar el almacenamiento.",
    "detailedStory": "Gran mueble de pared en madera natural con estantería abierta y gabinetes inferiores integrados, diseñado a la medida para optimizar el almacenamiento. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-13.webp",
    "isFeatured": false,
    "features": [
      "Madera natural sin terminar",
      "Molduras decorativas",
      "Paneles empotrados",
      "Paleta: Madera natural clara, Beige cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-14",
    "title": "Sofá estilo clásico de madera tallada oscura",
    "category": "Muebles",
    "woodType": "Madera tallada",
    "description": "Sofá estilo clásico de madera tallada oscura con respaldo dividido y tapizado en tela de patrón damasco en tonos beige.",
    "detailedStory": "Sofá estilo clásico de madera tallada oscura con respaldo dividido y tapizado en tela de patrón damasco en tonos beige. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-14.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Tela tapizada con patrón brocado",
      "Paleta: Marrón caoba, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-15",
    "title": "Paneles de acceso empotrados en muro",
    "category": "Muebles",
    "woodType": "Madera natural con veta marcada",
    "description": "Paneles de acceso empotrados en muro con marcos de madera y puertas dobles con vetas alineadas, ideales para ocultar instalaciones de forma estética.",
    "detailedStory": "Paneles de acceso empotrados en muro con marcos de madera y puertas dobles con vetas alineadas, ideales para ocultar instalaciones de forma estética. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-15.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta marcada",
      "Marco de madera perimetral",
      "Paleta: Madera natural caoba, Blanco muro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-16",
    "title": "Mueble de baño doble de diseño clásico señorial",
    "category": "Muebles",
    "woodType": "Madera maciza o enchapada entintada",
    "description": "Mueble de baño doble de diseño clásico señorial, destacado por sus elegantes módulos curvos en los lavabos, detalladas molduras y una amplia distribución de cajones y puertas.",
    "detailedStory": "Mueble de baño doble de diseño clásico señorial, destacado por sus elegantes módulos curvos en los lavabos, detalladas molduras y una amplia distribución de cajones y puertas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-16.webp",
    "isFeatured": false,
    "features": [
      "Madera maciza o enchapada entintada",
      "Molduras decorativas en relieve",
      "Acabado en barniz satinado/brillante",
      "Paleta: Caoba, Marrón rojizo",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-17",
    "title": "Repisa de madera",
    "category": "Muebles",
    "woodType": "Madera tallada",
    "description": "Repisa de madera con tallados ornamentales en relieve y acabado pulido, ideal para decoraciones de estilo clásico.",
    "detailedStory": "Repisa de madera con tallados ornamentales en relieve y acabado pulido, ideal para decoraciones de estilo clásico. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-17.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Paleta: Caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-18",
    "title": "Mueble de pared integral en madera de nogal",
    "category": "Muebles",
    "woodType": "Madera de nogal",
    "description": "Mueble de pared integral en madera de nogal con centro multimedia para televisión y múltiples estanterías y gabinetes de almacenamiento superior.",
    "detailedStory": "Mueble de pared integral en madera de nogal con centro multimedia para televisión y múltiples estanterías y gabinetes de almacenamiento superior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-18.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Chapa de madera",
      "Pantalla LED de televisión",
      "Paleta: Nogal, Marrón oscuro, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-19",
    "title": "Mueble de carpintería fina",
    "category": "Muebles",
    "woodType": "Madera tallada a mano",
    "description": "Mueble de carpintería fina con elaborados detalles tallados en madera oscura, ideal para resaltar la elegancia clásica en un diseño interior.",
    "detailedStory": "Mueble de carpintería fina con elaborados detalles tallados en madera oscura, ideal para resaltar la elegancia clásica en un diseño interior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-19.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada a mano",
      "Cubierta de piedra clara",
      "Paleta: Nogal oscuro, Marrón caoba",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-20",
    "title": "Elegante campana de cocina ornamental",
    "category": "Muebles",
    "woodType": "Madera maciza tallada",
    "description": "Elegante campana de cocina ornamental con arco rebajado y detalladas tallas artesanales en madera de tono cálido, ideal para cocinas de estilo clásico y refinado.",
    "detailedStory": "Elegante campana de cocina ornamental con arco rebajado y detalladas tallas artesanales en madera de tono cálido, ideal para cocinas de estilo clásico y refinado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-20.webp",
    "isFeatured": false,
    "features": [
      "Madera maciza tallada",
      "Acabado en barniz satinado",
      "Ménsulas y molduras de madera",
      "Paleta: Castaño, Nogal, Marrón cálido",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MUEBLE-21",
    "title": "Elegante arco y marco de madera tallada a mano",
    "category": "Muebles",
    "woodType": "Madera natural tallada",
    "description": "Elegante arco y marco de madera tallada a mano con detalles ornamentales y molduras clásicas, ideal para entradas o separaciones de espacios de alta gama.",
    "detailedStory": "Elegante arco y marco de madera tallada a mano con detalles ornamentales y molduras clásicas, ideal para entradas o separaciones de espacios de alta gama. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/muebles/mueble-21.webp",
    "isFeatured": false,
    "features": [
      "Madera natural tallada",
      "Paleta: Madera caoba / natural",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "BANO-01-D",
    "title": "Mueble de baño flotante en madera de nogal",
    "category": "Baños",
    "woodType": "Madera de nogal",
    "description": "Mueble de baño flotante en madera de nogal con lavabo integrado sobre cubierta y revestimiento mural de azulejo texturizado.",
    "detailedStory": "Mueble de baño flotante en madera de nogal con lavabo integrado sobre cubierta y revestimiento mural de azulejo texturizado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/banos/bano-01_d.webp",
    "isFeatured": true,
    "features": [
      "Madera de nogal",
      "Cubierta de cerámica",
      "Azulejo tipo mosaico pétreo",
      "Paleta: Nogal, Blanco, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "BANO-02",
    "title": "Mueble de baño flotante",
    "category": "Baños",
    "woodType": "Madera oscura de nogal",
    "description": "Mueble de baño flotante con acabado en madera oscura y cubierta de cuarzo blanco, complementado con lavabos bowl texturizados en tono plateado.",
    "detailedStory": "Mueble de baño flotante con acabado en madera oscura y cubierta de cuarzo blanco, complementado con lavabos bowl texturizados en tono plateado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/banos/bano-02.webp",
    "isFeatured": false,
    "features": [
      "Madera oscura de nogal",
      "Cubierta de cuarzo blanco veteado",
      "Lavabos metálicos texturizados",
      "Paleta: Nogal, Blanco, Plateado",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "ESCALERA-01",
    "title": "Escalera flotante moderna",
    "category": "Escaleras",
    "woodType": "Mármol veteado",
    "description": "Escalera flotante moderna con peldaños de mármol veteado, iluminación integrada y barandal de vidrio templado que aporta amplitud y elegancia al espacio.",
    "detailedStory": "Escalera flotante moderna con peldaños de mármol veteado, iluminación integrada y barandal de vidrio templado que aporta amplitud y elegancia al espacio. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/escaleras/escalera-01.webp",
    "isFeatured": false,
    "features": [
      "Mármol veteado",
      "Vidrio templado",
      "Acero inoxidable",
      "Paleta: Blanco veteado, Gris, Transparente",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "ESCALERA-02",
    "title": "Escalera interior de diseño moderno",
    "category": "Escaleras",
    "woodType": "Madera texturizada en huellas y peraltes",
    "description": "Escalera interior de diseño moderno con escalones revestidos en madera, barandal metálico artístico y pasamanos de madera, optimizando el espacio con un área de servicio al fondo.",
    "detailedStory": "Escalera interior de diseño moderno con escalones revestidos en madera, barandal metálico artístico y pasamanos de madera, optimizando el espacio con un área de servicio al fondo. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/escaleras/escalera-02.webp",
    "isFeatured": false,
    "features": [
      "Madera texturizada en huellas y peraltes",
      "Barandal de herrería con patrón calado",
      "Pasamanos de madera",
      "Paleta: Nogal, Blanco, Gris acero",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "ESCALERA-03",
    "title": "Elegante escalera con peldaños de madera",
    "category": "Escaleras",
    "woodType": "Madera natural",
    "description": "Elegante escalera con peldaños de madera, barandilla de madera y paneles metálicos decorativos perforados, realzada por un revestimiento de piedra en el techo y paredes blancas.",
    "detailedStory": "Elegante escalera con peldaños de madera, barandilla de madera y paneles metálicos decorativos perforados, realzada por un revestimiento de piedra en el techo y paredes blancas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/escaleras/escalera-03.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Metal perforado",
      "Piedra decorativa",
      "Paleta: Madera caoba/nogal, Gris metálico, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-01",
    "title": "Recámara integral",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Recámara integral con clóset de pared a techo y área de tocador combinando madera tipo nogal, listones decorativos y un mueble blanco de almacenamiento inferior.",
    "detailedStory": "Recámara integral con clóset de pared a techo y área de tocador combinando madera tipo nogal, listones decorativos y un mueble blanco de almacenamiento inferior. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-01.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina blanca mate",
      "Espejo de vanidad",
      "Paleta: Nogal, Blanco, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-02",
    "title": "Recámara de estilo clásico fabricada en madera oscura",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Recámara de estilo clásico fabricada en madera oscura, compuesta por una cama de cabecera alta y burós a juego con múltiples cajones.",
    "detailedStory": "Recámara de estilo clásico fabricada en madera oscura, compuesta por una cama de cabecera alta y burós a juego con múltiples cajones. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-02.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Herrajes metálicos",
      "Tela textil",
      "Paleta: Café oscuro, Azul marino",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-03",
    "title": "Recámara de diseño contemporáneo que incluye una sólida cabecera y mesas de noche de madera a juego",
    "category": "Recámaras",
    "woodType": "Madera natural",
    "description": "Recámara de diseño contemporáneo que incluye una sólida cabecera y mesas de noche de madera a juego, complementadas con ropa de cama de tonos neutros y acentos florales.",
    "detailedStory": "Recámara de diseño contemporáneo que incluye una sólida cabecera y mesas de noche de madera a juego, complementadas con ropa de cama de tonos neutros y acentos florales. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-03.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Textil con patrón floral",
      "Paleta: Madera nogal, Beige, Rojo vino",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-04",
    "title": "Cabecera y mesas de noche de diseño moderno elaboradas en madera de nogal",
    "category": "Recámaras",
    "woodType": "Madera natural con chapa de nogal",
    "description": "Cabecera y mesas de noche de diseño moderno elaboradas en madera de nogal, creando un ambiente cálido y sofisticado en la recámara.",
    "detailedStory": "Cabecera y mesas de noche de diseño moderno elaboradas en madera de nogal, creando un ambiente cálido y sofisticado en la recámara. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-04.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con chapa de nogal",
      "Herrajes metálicos",
      "Paleta: Nogal, Azul claro, Beige",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-05",
    "title": "Recámara con cabecera de madera y burós flotados a juego",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Recámara con cabecera de madera y burós flotados a juego, complementada con iluminación de pared y textiles en tonos neutros.",
    "detailedStory": "Recámara con cabecera de madera y burós flotados a juego, complementada con iluminación de pared y textiles en tonos neutros. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-05.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Textil con patrón geométrico",
      "Pared con acabado en pintura gris",
      "Paleta: Nogal, Gris, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-06",
    "title": "Amplio escritorio de madera",
    "category": "Recámaras",
    "woodType": "Madera natural",
    "description": "Amplio escritorio de madera con múltiples cajones y elegante acabado superior, ideal para oficina o estudio tradicional.",
    "detailedStory": "Amplio escritorio de madera con múltiples cajones y elegante acabado superior, ideal para oficina o estudio tradicional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-06.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos oscuros",
      "Cubierta con incrustaciones decorativas",
      "Paleta: Nogal, Marrón oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-07",
    "title": "Juego de recámara de estilo clásico",
    "category": "Recámaras",
    "woodType": "Madera tallada",
    "description": "Juego de recámara de estilo clásico con acabado en nogal oscuro, destacando detalles tallados a mano y un espejo con marco arqueado.",
    "detailedStory": "Juego de recámara de estilo clásico con acabado en nogal oscuro, destacando detalles tallados a mano y un espejo con marco arqueado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-07.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Espejo biselado",
      "Herrajes metálicos dorados",
      "Paleta: Nogal oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-08",
    "title": "Recámara contemporánea",
    "category": "Recámaras",
    "woodType": "Madera natural con acabado oscuro",
    "description": "Recámara contemporánea con cabecera y mesas de noche de madera en tono nogal, complementada con textiles estampados y tonos neutros para un ambiente cálido y acogedor.",
    "detailedStory": "Recámara contemporánea con cabecera y mesas de noche de madera en tono nogal, complementada con textiles estampados y tonos neutros para un ambiente cálido y acogedor. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-08.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con acabado oscuro",
      "Textil de algodón con patrón floral",
      "Pared con aplanado fino",
      "Paleta: Nogal, Blanco, Verde claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-09",
    "title": "Cabecera de madera de diseño limpio y minimalista acompañada de un buró a juego de dos cajones",
    "category": "Recámaras",
    "woodType": "Madera natural con veta visible",
    "description": "Cabecera de madera de diseño limpio y minimalista acompañada de un buró a juego de dos cajones con tiradores metálicos discretos.",
    "detailedStory": "Cabecera de madera de diseño limpio y minimalista acompañada de un buró a juego de dos cajones con tiradores metálicos discretos. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-09.webp",
    "isFeatured": false,
    "features": [
      "Madera natural con veta visible",
      "Herrajes metálicos",
      "Paleta: Nogal, Beige, Azul claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-10",
    "title": "Juego de tocador y espejo de estilo clásico en color blanco satinado",
    "category": "Recámaras",
    "woodType": "Madera tallada",
    "description": "Juego de tocador y espejo de estilo clásico en color blanco satinado, con detalles tallados, molduras decorativas y herrajes oscuros contrastantes.",
    "detailedStory": "Juego de tocador y espejo de estilo clásico en color blanco satinado, con detalles tallados, molduras decorativas y herrajes oscuros contrastantes. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-10.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Pintura en acabado laqueado blanco",
      "Herrajes metálicos oscuros",
      "Paleta: Blanco satinado, Bronce oscuro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-11",
    "title": "Recámara de estilo clásico fabricada en madera en tono nogal",
    "category": "Recámaras",
    "woodType": "Madera natural",
    "description": "Recámara de estilo clásico fabricada en madera en tono nogal, compuesta por una robusta cama con cabecera y piecera paneleadas, acompañada por dos burós laterales a juego.",
    "detailedStory": "Recámara de estilo clásico fabricada en madera en tono nogal, compuesta por una robusta cama con cabecera y piecera paneleadas, acompañada por dos burós laterales a juego. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-11.webp",
    "isFeatured": false,
    "features": [
      "Madera natural",
      "Herrajes metálicos",
      "Paleta: Nogal",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-12",
    "title": "Habitación infantil",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Habitación infantil equipada con camas de madera con barandillas de seguridad y cabeceras integradas, combinando tonos oscuros y claros para un diseño funcional.",
    "detailedStory": "Habitación infantil equipada con camas de madera con barandillas de seguridad y cabeceras integradas, combinando tonos oscuros y claros para un diseño funcional. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-12.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Madera natural en tablones",
      "Paleta: Nogal oscuro, Madera clara, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-13",
    "title": "Cabecera de diseño moderno",
    "category": "Recámaras",
    "woodType": "Madera laminada o chapada",
    "description": "Cabecera de diseño moderno con paneles verticales tapizados en gris, enmarcados por columnas de madera y lámparas colgantes integradas.",
    "detailedStory": "Cabecera de diseño moderno con paneles verticales tapizados en gris, enmarcados por columnas de madera y lámparas colgantes integradas. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-13.webp",
    "isFeatured": false,
    "features": [
      "Madera laminada o chapada",
      "Paneles tapizados en tela",
      "Estructura metálica para iluminación",
      "Paleta: Nogal, Gris, Negro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-14",
    "title": "Habitación infantil",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Habitación infantil con estructura de literas escalonadas de diseño personalizado en madera y amplio mueble integral con centro de entretenimiento integrado.",
    "detailedStory": "Habitación infantil con estructura de literas escalonadas de diseño personalizado en madera y amplio mueble integral con centro de entretenimiento integrado. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-14.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Madera clara en tablillas",
      "Piso de porcelanato",
      "Paleta: Nogal oscuro, Beige, Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-15",
    "title": "Recámara de estilo clásico elaborada en madera oscura",
    "category": "Recámaras",
    "woodType": "Madera tallada",
    "description": "Recámara de estilo clásico elaborada en madera oscura con finos detalles tallados, compuesta por una cama robusta, un tocador con espejo grande y un buró a juego.",
    "detailedStory": "Recámara de estilo clásico elaborada en madera oscura con finos detalles tallados, compuesta por una cama robusta, un tocador con espejo grande y un buró a juego. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-15.webp",
    "isFeatured": false,
    "features": [
      "Madera tallada",
      "Chapa de madera con acabado oscuro",
      "Espejo biselado",
      "Paleta: Nogal oscuro, Rojo carmesí",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-16",
    "title": "Recámara de diseño contemporáneo que incluye una cama",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Recámara de diseño contemporáneo que incluye una cama con plataforma de madera de nogal y una amplia cabecera integrada con mesas de noche flotantes a juego.",
    "detailedStory": "Recámara de diseño contemporáneo que incluye una cama con plataforma de madera de nogal y una amplia cabecera integrada con mesas de noche flotantes a juego. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-16.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Textil de colchón capitonado",
      "Herrajes metálicos",
      "Paleta: Nogal, Blanco, Gris claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-17",
    "title": "Recámara de diseño limpio y funcional en color blanco",
    "category": "Recámaras",
    "woodType": "Madera pintada",
    "description": "Recámara de diseño limpio y funcional en color blanco, compuesta por una cama de sólida estructura y una mesa de noche a juego.",
    "detailedStory": "Recámara de diseño limpio y funcional en color blanco, compuesta por una cama de sólida estructura y una mesa de noche a juego. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-17.webp",
    "isFeatured": false,
    "features": [
      "Madera pintada",
      "Acabado lacado blanco",
      "Paleta: Blanco",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "RECAMARA-18",
    "title": "Dormitorio moderno",
    "category": "Recámaras",
    "woodType": "Madera de nogal",
    "description": "Dormitorio moderno con mueble de tocador integrado en madera de nogal, paneles acanalados decorativos y cómoda blanca de líneas limpias.",
    "detailedStory": "Dormitorio moderno con mueble de tocador integrado en madera de nogal, paneles acanalados decorativos y cómoda blanca de líneas limpias. Fabricación artesanal de precisión adaptada a los requerimientos del cliente, optimizando espacios con materiales seleccionados.",
    "image": "/ejmonjo/assets/recamaras/recamara-18.webp",
    "isFeatured": false,
    "features": [
      "Madera de nogal",
      "Melamina o laca blanca mate",
      "Paneles acanalados de madera",
      "Paleta: Nogal, Blanco, Gris claro",
      "Fabricación a medida en Ahualulco de Mercado, Jal."
    ],
    "dimensions": "Dimensiones personalizadas según espacio",
    "location": "Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-NOGAL",
    "title": "Madera Maciza de Nogal Americano",
    "category": "Materiales",
    "woodType": "Madera Noble",
    "description": "Una de las maderas nobles más apreciadas a nivel mundial por su tono café chocolate profundo y vetas sofisticadas.",
    "detailedStory": "Madera maciza de Nogal Americano seleccionada pieza por pieza. Acabado de lujo natural, alta durabilidad y excelente estabilidad con el paso del tiempo.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-nogal.webp",
    "isFeatured": true,
    "features": [
      "Madera noble maciza",
      "Acabado de lujo natural",
      "Alta durabilidad y estabilidad",
      "Tono chocolate profundo"
    ],
    "dimensions": "Tablones y piezas a la medida",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-PAROTA",
    "title": "Madera Tropical de Parota / Huanacaxtle",
    "category": "Materiales",
    "woodType": "Madera Tropical",
    "description": "Madera tropical mexicana famosa por su contraste natural: tonos dorados/café al centro y orillas claras (albura).",
    "detailedStory": "Vetas llamativas y orgánicas, excelente resistencia natural a plagas y gran presencia visual en piezas monolíticas y cubiertas vivas.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-parota.webp",
    "isFeatured": true,
    "features": [
      "Madera tropical de gran formato",
      "Vetas orgánicas y dramáticas",
      "Resistencia natural a plagas",
      "Ideal para mesas de una sola pieza"
    ],
    "dimensions": "Tablones monumentales y cubiertas live-edge",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-ROSA-MORADA",
    "title": "Madera Maciza de Rosa Morada",
    "category": "Materiales",
    "woodType": "Madera Nativa",
    "description": "Madera nativa fina con tonos cálidos que van del beige al miel, con una apariencia muy similar al roble o fresno.",
    "detailedStory": "Gran equilibrio entre dureza, resistencia y elegancia visual; se adapta con gran nobleza tanto a estilos clásicos como contemporáneos.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-rosa-morada.webp",
    "isFeatured": true,
    "features": [
      "Madera nativa mexicana",
      "Tonos cálidos beige a miel",
      "Gran dureza y resistencia",
      "Ideal para puertas y sillería"
    ],
    "dimensions": "Cortes escuadrados a medida",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-HAYA",
    "title": "Madera Maciza de Haya Europea",
    "category": "Materiales",
    "woodType": "Madera Dura",
    "description": "Madera dura europea de tono claro y uniforme, caracterizada por un grano fino y discreto sin vetas invasivas.",
    "detailedStory": "Superficie suave, altamente resistente a golpes e impactos; ideal para acabados limpios y de estilo nórdico y contemporáneo.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-haya.webp",
    "isFeatured": false,
    "features": [
      "Madera dura europea",
      "Grano fino y uniforme",
      "Resistente a impactos",
      "Estilo nórdico / contemporáneo"
    ],
    "dimensions": "Dimensiones a solicitud",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-MELAMINA",
    "title": "Tablero de Ingeniería en Melamina",
    "category": "Materiales",
    "woodType": "Tablero de Ingeniería",
    "description": "Tablero rígido recubierto por una película decorativa sintética con texturas o colores sólidos de alta durabilidad.",
    "detailedStory": "Superficie fácil de limpiar, no requiere barniz, altamente resistente a rayaduras ligeras y con la mejor relación costo-beneficio para interiores.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-melamina.webp",
    "isFeatured": false,
    "features": [
      "Tablero de ingeniería",
      "Fácil de limpiar",
      "Alta resistencia a rayaduras",
      "Ideal para interiores de clósets"
    ],
    "dimensions": "Hojas estándar y despiece a medida",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-MDF-NOGAL",
    "title": "MDF Enchapado en Nogal Natural",
    "category": "Materiales",
    "woodType": "Tablero Enchapado",
    "description": "Tablero de alta densidad cubierto en su superficie por una lámina delgada de madera real de nogal.",
    "detailedStory": "Ofrece la vista, textura y calidez del nogal auténtico, pero sobre una base completamente plana y estable que no se tuerce.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-MDF-ENCHAPADO-NOGAL.webp",
    "isFeatured": true,
    "features": [
      "Superficie de madera real",
      "Base ultra plana y estable",
      "No se tuerce ni deforma",
      "Acabado premium de ebanistería"
    ],
    "dimensions": "Paneles completos y frentes calibrados",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-LISTON",
    "title": "Tablero Enlistonado de Madera Maciza",
    "category": "Materiales",
    "woodType": "Tablero Enlistonado",
    "description": "Tablero formado por un núcleo de bloques de madera sólida unidos lado a lado y sellados por ambas caras.",
    "detailedStory": "Mucho más ligero y rígido que el MDF; soporta gran peso a lo largo sin pandearse ni doblarse, ideal para libreros y puertas altas.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-liston.webp",
    "isFeatured": false,
    "features": [
      "Núcleo de bloques de madera sólida",
      "Gran rigidez estructural",
      "Soporta gran peso sin pandearse",
      "Ideal para repisas y puertas altas"
    ],
    "dimensions": "Tableros estructurales a medida",
    "location": "Taller Ahualulco de Mercado, Jal."
  },
  {
    "id": "MAT-TRIPLAY",
    "title": "Triplay / Multiplay con Cara de Caobilla",
    "category": "Materiales",
    "woodType": "Madera Multilaminar",
    "description": "Tablero multicapa fabricado a presión con cara exterior de madera de caobilla y resistencia mecánica superior.",
    "detailedStory": "Excepcional resistencia mecánica, excelente retención para tornillos y gran tolerancia a la flexión y humedad moderada.",
    "image": "/ejmonjo/assets/materiales/ejmonjo-triplay-caobilla.webp",
    "isFeatured": false,
    "features": [
      "Estructura multilaminar cruzada",
      "Excelente retención de tornillos",
      "Resistencia a la flexión",
      "Ideal para fondos y refuerzos"
    ],
    "dimensions": "Hojas completas y cortes a medida",
    "location": "Taller Ahualulco de Mercado, Jal."
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
