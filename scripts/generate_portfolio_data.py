import json
import os

with open('Recursos temporales/catalogo_assets.json', 'r', encoding='utf-8') as f:
    raw_catalog = json.load(f)

def flatten_str(v):
    if isinstance(v, list):
        return ' '.join(flatten_str(x) for x in v)
    return str(v or '').lower()

items = []
for entry in raw_catalog:
    archivo = entry.get('archivo', '')
    ruta = entry.get('ruta_relativa', '')
    if not archivo or not ruta:
        continue
    if ruta.startswith('logos/') or archivo in ['ej-monjo-ahualulco.webp']:
        continue
        
    cat_raw = flatten_str(entry.get('categoria', ''))
    estilo = flatten_str(entry.get('estilo', ''))
    colores_str = flatten_str(entry.get('colores', []))
    mat_str = flatten_str(entry.get('materiales_detectados', []))
    desc = entry.get('microdescripcion', '')
    desc_lower = flatten_str(desc)
    all_text = f'{estilo} {colores_str} {mat_str} {desc_lower}'

    # 1. Primary Category (Espacio)
    if 'cocina' in ruta or 'cocina' in cat_raw:
        category = 'Cocinas'
        category_group = 'cocinas'
    elif 'closet' in ruta or 'closet' in cat_raw:
        category = 'Closets y Vestidores'
        category_group = 'closets'
    elif 'puerta' in ruta or 'puerta' in cat_raw:
        category = 'Puertas'
        category_group = 'puertas'
    elif 'recamara' in ruta or 'recamara' in cat_raw:
        category = 'Recámaras'
        category_group = 'recamaras'
    elif 'proceso' in ruta or 'proceso' in cat_raw:
        category = 'En Taller / Proceso'
        category_group = 'proceso'
    elif 'mueble' in ruta or 'mueble' in cat_raw or 'bano' in ruta or 'escalera' in ruta or 'baño' in cat_raw:
        category = 'Muebles a Medida / Especiales'
        category_group = 'especiales'
    else:
        continue

    # 2. Style Family
    if any(k in estilo for k in ['mid-century', 'clásico moderno', 'transicional', 'ecléctico']):
        style_family = 'Transicional / Mid-Century'
        style_id = 'transicional'
    elif any(k in estilo for k in ['rústico', 'rustico', 'colonial', 'granero']):
        style_family = 'Rústico / Colonial'
        style_id = 'rustico'
    elif any(k in estilo for k in ['clásico', 'clasico', 'barroco', 'tradicional', 'tallad']):
        style_family = 'Clásico / Tradicional'
        style_id = 'clasico'
    else:
        style_family = 'Moderno / Minimalista'
        style_id = 'moderno'

    # 3. Tone
    if any(k in colores_str or k in all_text for k in ['verde', 'azul', 'vino', 'coral', 'fuego', 'epóxico', 'epoxico']):
        tone = 'Acentos Especiales'
        tone_id = 'acentos'
    elif any(k in colores_str for k in ['negro', 'grafito', 'carbón', 'pizarra', 'gris topo', 'gris oscuro', 'gris acero']):
        tone = 'Negros y Grises'
        tone_id = 'grises'
    elif any(k in colores_str for k in ['blanco', 'crema', 'marfil', 'perla', 'greige', 'hueso']) and not any(k in colores_str for k in ['nogal oscuro', 'wengue', 'caoba']):
        tone = 'Blancos y Claros'
        tone_id = 'claros'
    elif any(k in colores_str or k in all_text for k in ['nogal oscuro', 'wengue', 'wengué', 'caoba', 'chocolate', 'café oscuro', 'marron oscuro', 'marrón oscuro', 'oscuro']):
        tone = 'Maderas Oscuras'
        tone_id = 'oscuras'
    else:
        tone = 'Maderas Cálidas / Naturales'
        tone_id = 'calidas'

    # 4. Key Element / Countertop Material
    if any(k in mat_str or k in all_text for k in ['cuarzo', 'calacatta']):
        element = 'Cubierta de Cuarzo'
        element_id = 'cuarzo'
    elif any(k in mat_str or k in all_text for k in ['granito']):
        element = 'Cubierta de Granito'
        element_id = 'granito'
    elif any(k in mat_str or k in all_text for k in ['herrería', 'herreria', 'acero', 'metal', 'cristal', 'vidrio']):
        element = 'Detalles en Herrería / Metal / Cristal'
        element_id = 'herreria-cristal'
    else:
        element = 'Madera Sólida / Natural'
        element_id = 'madera-solida'

    base_name = archivo.rsplit('.', 1)[0]
    sku = base_name.upper().replace('_', '-')
    image_path = f'/ejmonjo/assets/{ruta}'
    is_featured = '_d' in base_name.lower()

    title = desc.split('.')[0].strip() if desc else f'{category} artesanal'
    if len(title) > 90:
        title = title[:87] + '...'

    features = [
        m for m in entry.get('materiales_detectados', [])[:3] if isinstance(m, str)
    ]
    if not features:
        features = ['Madera de primera selección']
    features.append(f'Estilo: {style_family}')
    features.append('Fabricación a medida en Ahualulco de Mercado, Jal.')

    items.append({
        'id': sku,
        'title': title,
        'category': category,
        'categoryGroup': category_group,
        'styleFamily': style_family,
        'styleId': style_id,
        'tone': tone,
        'toneId': tone_id,
        'element': element,
        'elementId': element_id,
        'woodType': entry.get('materiales_detectados', ['Madera fina'])[0] if entry.get('materiales_detectados') else 'Madera fina',
        'description': desc or f'Fabricación artesanal a medida de {category.lower()} con maderas finas y acabados de alta calidad.',
        'detailedStory': f'{desc} Fabricación artesanal de precisión en Ahualulco de Mercado, optimizando cada detalle según el espacio y gusto del cliente.' if desc else 'Fabricación artesanal de precisión en Ahualulco de Mercado.',
        'image': image_path,
        'isFeatured': is_featured,
        'features': features,
        'dimensions': 'Dimensiones personalizadas según espacio',
        'location': 'Ahualulco de Mercado, Jal.'
    })

header_code = """/**
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

// Configuración de los 4 filtros clave del Portafolio
const PORTFOLIO_FILTERS_CONFIG = {
  categories: [
    { id: "all", label: "Todos los Proyectos", icon: "✦" },
    { id: "cocinas", label: "Cocinas", icon: "🍳" },
    { id: "closets", label: "Closets y Vestidores", icon: "👔" },
    { id: "puertas", label: "Puertas", icon: "🚪" },
    { id: "recamaras", label: "Recámaras", icon: "🛏️" },
    { id: "especiales", label: "Muebles a Medida / Especiales", icon: "🪑" },
    { id: "proceso", label: "En Taller / Proceso", icon: "🔨" }
  ],
  styles: [
    { id: "all", label: "Todos los Estilos" },
    { id: "moderno", label: "Moderno / Minimalista" },
    { id: "clasico", label: "Clásico / Tradicional" },
    { id: "rustico", label: "Rústico / Colonial" },
    { id: "transicional", label: "Transicional / Mid-Century" }
  ],
  tones: [
    { id: "all", label: "Todas las Tonalidades", color: null },
    { id: "calidas", label: "Maderas Cálidas / Naturales", color: "#c49a6c", title: "Nogal claro, roble, castaño, miel" },
    { id: "oscuras", label: "Maderas Oscuras", color: "#4a2e1b", title: "Nogal oscuro, caoba, wengué, chocolate" },
    { id: "claros", label: "Blancos y Claros", color: "#f8f7f5", border: true, title: "Blanco mate, alto brillo, crema, beige" },
    { id: "grises", label: "Negros y Grises", color: "#2b2d30", title: "Negro mate, grafito, carbón, gris topo" },
    { id: "acentos", label: "Acentos Especiales", color: "#3d5a45", title: "Verde oliva, azul violáceo, epóxicos" }
  ],
  elements: [
    { id: "all", label: "Todas las cubiertas / acabados" },
    { id: "cuarzo", label: "Cubierta de Cuarzo" },
    { id: "granito", label: "Cubierta de Granito" },
    { id: "madera-solida", label: "Madera Sólida / Natural" },
    { id: "herreria-cristal", label: "Detalles en Herrería / Metal / Cristal" }
  ]
};

// Maderas Macizas (Muestrario de Muebles a la Medida y Home)
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

// Tableros de Ingeniería (Muestrario de Muebles a la Medida y Home)
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
    description: "Nuestros maestros ebanistas trabajan la madera combinando técnicas tradicionales de ensamble con acabados finos.",
    details: [
      "Madera estufada con porcentaje de humedad controlado",
      "Ensambles tradicionales de máxima durabilidad",
      "Instalación limpia y ajuste final en sitio"
    ]
  }
];

// Proyectos del Portafolio (Normalizados en 4 filtros clave)
const PORTFOLIO_ITEMS = """

full_js = header_code + json.dumps(items, indent=2, ensure_ascii=False) + ';\n'

with open('public_html/js/data.js', 'w', encoding='utf-8') as f:
    f.write(full_js)

print('Updated public_html/js/data.js successfully with', len(items), 'projects!')
