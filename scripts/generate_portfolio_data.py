import json
import os
import re

with open('Recursos temporales/catalogo_assets.json', 'r', encoding='utf-8') as f:
    raw_catalog = json.load(f)

def flatten_str(v):
    if isinstance(v, list):
        return ' '.join(flatten_str(x) for x in v)
    return str(v or '').lower()

# Orden estricto de mayor a menor número de imágenes según carpetas
cats_order = ['closet', 'cocinas', 'puertas', 'muebles', 'recamaras', 'escaleras', 'banos']

prefixes = {
    'closet': 'CLO',
    'cocinas': 'COC',
    'puertas': 'PUE',
    'muebles': 'MUE',
    'recamaras': 'REC',
    'escaleras': 'ESC',
    'banos': 'BAN'
}

cat_display_names = {
    'closet': 'Closet',
    'cocinas': 'Cocinas',
    'puertas': 'Puertas',
    'muebles': 'Muebles',
    'recamaras': 'Recámaras',
    'escaleras': 'Escaleras',
    'banos': 'Baños'
}

# Agrupar solo los archivos que están DENTRO de las 7 subcarpetas
items_by_cat = {c: [] for c in cats_order}

for entry in raw_catalog:
    archivo = entry.get('archivo', '')
    ruta = entry.get('ruta_relativa', '')
    if not archivo or not ruta:
        continue
    
    # Solo archivos dentro de las carpetas especificadas
    matched_cat = None
    for c in cats_order:
        if ruta.startswith(c + '/'):
            matched_cat = c
            break
            
    if not matched_cat:
        continue
        
    items_by_cat[matched_cat].append(entry)

# Generación ordenada y asignación de SKUs simples
items = []

for c in cats_order:
    cat_items = items_by_cat[c]
    
    # Separar archivos estándar de extras para numeración continua sin colisiones
    standard = []
    extra = []
    for it in cat_items:
        f = it['archivo']
        if 'ahualulco' in f:
            extra.append(it)
        else:
            standard.append(it)
            
    def get_num(it):
        m = re.search(r'(\d+)', it['archivo'])
        return int(m.group(1)) if m else 0
        
    standard.sort(key=get_num)
    extra.sort(key=get_num)
    
    # Asignar SKUs estándar: e.g. cocina-01_d.webp -> COC-001
    for it in standard:
        num = get_num(it)
        it['calculated_sku'] = f'{prefixes[c]}-{num:03d}'
        
    max_num = get_num(standard[-1]) if standard else 0
    for idx, it in enumerate(extra, start=1):
        it['calculated_sku'] = f'{prefixes[c]}-{(max_num + idx):03d}'
        
    ordered_cat_items = standard + extra
    
    for entry in ordered_cat_items:
        archivo = entry['archivo']
        ruta = entry['ruta_relativa']
        sku = entry['calculated_sku']
        
        cat_raw = flatten_str(entry.get('categoria', ''))
        estilo = flatten_str(entry.get('estilo', ''))
        colores_str = flatten_str(entry.get('colores', []))
        mat_str = flatten_str(entry.get('materiales_detectados', []))
        desc = entry.get('microdescripcion', '')
        desc_lower = flatten_str(desc)
        all_text = f'{estilo} {colores_str} {mat_str} {desc_lower}'

        category = cat_display_names[c]
        category_group = c

        # 2. Estilo de Diseño
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

        # 3. Tonalidad
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

        # 4. Material de Cubierta / Elemento Clave
        if any(k in mat_str or k in all_text for k in ['cuarzo', 'calacatta']):
            element = 'Cubierta de Cuarzo'
            element_id = 'cuarzo'
        elif any(k in mat_str or k in all_text for k in ['granito', 'mármol', 'marmol']):
            element = 'Cubierta de Granito'
            element_id = 'granito'
        elif any(k in mat_str or k in all_text for k in ['herrería', 'herreria', 'acero', 'metal', 'cristal', 'vidrio']):
            element = 'Detalles en Herrería / Metal / Cristal'
            element_id = 'herreria-cristal'
        else:
            element = 'Madera Sólida / Natural'
            element_id = 'madera-solida'

        image_path = f'/ejmonjo/assets/{ruta}'
        is_featured = '_d' in archivo.lower()

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
    text = `${message} - ${sku}\\nhttps://lab.sistella.com.mx/ejmonjo/portafolio?id=${sku}`;
  }
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

// Generador de mensajes breves para piezas del portafolio
function getWhatsAppPortfolioUrl(item) {
  if (!item) return getWhatsAppUrl();
  const catPhrases = {
    'closet': 'el Closet',
    'cocinas': 'la Cocina',
    'puertas': 'la Puerta',
    'muebles': 'el Mueble',
    'recamaras': 'la Recámara',
    'escaleras': 'la Escalera',
    'banos': 'el Baño'
  };
  const catPhrase = catPhrases[item.categoryGroup] || ('el ' + item.category);
  const text = `Hola, EJ Monjo Carpintería, me gustaría cotizar una pieza inspirada en ${catPhrase} - ${item.id}\\nhttps://lab.sistella.com.mx/ejmonjo/portafolio?id=${item.id}`;
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

// Configuración de los 4 filtros clave del Portafolio (Sin emojis, ordenado de mayor a menor)
const PORTFOLIO_FILTERS_CONFIG = {
  categories: [
    { id: "all", label: "Todos", count: 252 },
    { id: "closet", label: "Closet", count: 90 },
    { id: "cocinas", label: "Cocinas", count: 83 },
    { id: "puertas", label: "Puertas", count: 35 },
    { id: "muebles", label: "Muebles", count: 21 },
    { id: "recamaras", label: "Recámaras", count: 18 },
    { id: "escaleras", label: "Escaleras", count: 3 },
    { id: "banos", label: "Baños", count: 2 }
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
    { id: "all", label: "Todas las Cubiertas y Acabados" },
    { id: "cuarzo", label: "Cubierta de Cuarzo" },
    { id: "granito", label: "Cubierta de Granito o Mármol" },
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
    cost: "5 / 5",
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
    cost: "4 / 5",
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
    cost: "3.5 / 5",
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
    cost: "4 / 5",
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
    cost: "1.5 / 5",
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
    cost: "3 / 5",
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
    cost: "3 / 5",
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
    cost: "2.5 / 5",
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
