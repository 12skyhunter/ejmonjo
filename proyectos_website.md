# Análisis Comparativo de Arquitectura Web: EJ Monjo vs. Enzava

Documento de análisis técnico comparativo entre los dos proyectos web desarrollados en Sistella: **EJ Monjo** y **Enzava**.

---

## 1. Proyecto Actual: EJ Monjo (Carpintería y Ebanistería)

### Tipo de Sitio y Propósito
- **Giro y propósito:** Sitio web corporativo y portafolio interactivo para un taller de ebanistería y carpintería arquitectónica fina con más de 20 años de tradición en Ahualulco de Mercado, Jalisco.
- **Objetivo de conversión:** Branding premium, exhibición de portafolio de proyectos residenciales por categorías (cocinas, puertas, baños, clósets, escaleras, muebles) y generación de leads directos hacia cotización vía WhatsApp.

### Arquitectura Técnica
- **Paradigma:** **Single Page Application (SPA)** moderna.
- **Tecnologías base:** React 19, TypeScript, Vite, Tailwind CSS y Lucide Icons.
- **Navegación e Interactividad:** Enrutamiento en el cliente mediante la API de historial del navegador (`popstate` / `window.history.pushState`). Modales reactivos para detalle de proyectos (`PortfolioDetailModal`), configuración de madera en muebles bajo pedido (`ProductDetailModal`) y generación de URLs dinámicas de WhatsApp con SKUs.
- **Estructura de entrega:** El código fuente original (`src/`) se compila con Vite a un paquete de producción minificado dentro de `public_html/assets/` (`index-CO059aYg.js` y `index-CmS_emcK.css`), que se despliega directamente vía GitHub Actions (Rsync).

---

## 2. Proyecto de Referencia: Enzava (Suplementos y Cuidado Personal)

### Tipo de Sitio y Propósito
- **Giro y propósito:** Catálogo digital de productos de salud, bienestar, suplementos alimenticios y cosméticos naturales con sede en Guadalajara, Jalisco.
- **Objetivo de conversión:** Mostrar fichas técnicas de productos (tablas nutrimentales, modo de empleo, ingredientes) y canalizar la venta a través de **Amazon** (enlaces directos de compra) y pedidos por WhatsApp.

### Arquitectura Técnica
- **Paradigma:** **Multi-Page Application (MPA)** clásica / estática.
- **Tecnologías base:** HTML5 semántico, Vanilla JavaScript (ES6+), y Tailwind CSS cargado vía CDN (`<script src="https://cdn.tailwindcss.com">`).
- **Páginas individuales:** Cada sección es un archivo HTML independiente (`index.html`, `amazon.html`, `suplementos.html`, `cuidado-personal.html`, `producto.html`, `contacto.html`).
- **Desacoplamiento de Datos:** Toda la base de datos de productos vive en archivos JavaScript planos y estructurados:
  - `js/products.js`: Catálogo completo con descripciones, beneficios, presentaciones, imágenes y tablas nutrimentales completas.
  - `js/amazon_products.js`: Catálogo exclusivo de productos sincronizados con Amazon (IDs, URLs directas, imágenes, descripciones cortas).
  - `js/layout.js`: Inyección dinámica de componentes comunes (navbar, footer).

---

## 3. Comparativa: Ventajas y Desventajas

| Criterio | EJ Monjo (SPA React + Vite) | Enzava (MPA HTML + Vanilla JS Data) |
| :--- | :--- | :--- |
| **Arquitectura** | SPA (Single Page Application). Una sola página HTML que monta componentes dinámicos en React. | MPA (Multi-Page Application). Varias páginas HTML independientes que leen datos de scripts JS. |
| **Build Step / Compilación** | Requiere empaquetador (Vite/Node.js) para compilar TypeScript/JSX a JS minificado. | **Sin compilación.** Se edita el archivo y el cambio se refleja inmediatamente al recargar el navegador. |
| **Experiencia de Usuario (UX)** | Transiciones fluidas entre secciones sin parpadeo ni recarga completa de la página. Modales y filtros reactivos. | Recarga estándar de navegador al cambiar de página, pero carga instantánea gracias a su peso ligero. |
| **Manejo de Datos** | Los datos (`PORTFOLIO_ITEMS`, `CATALOG_ITEMS`) se integran en el bundle compilado. | **Completamente desacoplado.** Arrays planos (`products`, `amazonProducts`) fáciles de leer por humanos y máquinas. |
| **Dependencias** | Depende de Node, npm, React, Vite, librerías externas de iconos y compiladores. | Cero dependencias locales. Depende únicamente de CDN para Tailwind. |
| **SEO y Rastrillado** | Requiere configuración especial para pre-renderizado si se busca indexación profunda de cada ruta sin SSR. | **Excelente SEO nativo.** Cada página tiene su propio HTML, etiquetas `<meta>`, OpenGraph y `sitemap.xml` indexable. |

---

## 4. ¿Cuál es más fácil de mantener?

### Ganador: **Enzava**
1. **Curva de aprendizaje cero:** No requiere conocimientos avanzados de React, JSX, hooks (`useState`, `useEffect`) ni configuración de empaquetadores como Vite o Webpack.
2. **Edición quirúrgica de contenido:** Para agregar, editar o quitar un producto, simplemente se abre `js/products.js` o `js/amazon_products.js` y se edita un objeto de datos JSON/JS estándar.
3. **Despliegue sin fricción:** No hay riesgo de que un error tipográfico en un archivo rompa un bundle compilado. Si un producto tiene un error en una coma, solo afecta ese producto, no toda la aplicación.
4. **Independencia de entorno:** Se puede editar desde cualquier editor de texto o en el servidor sin necesidad de tener Node.js instalado en la máquina.

---

## 5. ¿Cuál consume MENOS TOKENS al hacer cambios y actualizaciones menores?

### Ganador indiscutible: **Enzava (Gasta hasta un 80%–90% menos tokens)**

Al trabajar con asistentes de inteligencia artificial (LLMs/Agentes):

### En el caso de Enzava:
- **Contexto muy acotado:** Si pides *"cambia el precio o la descripción de la Astaxantina"*, el asistente únicamente necesita leer las ~30 líneas del producto en [products.js](file:///Users/angelr/Code%20Sistella/260116%20Enzava/260116%20Enzava%20sw/public_html/js/products.js).
- **Consumo de tokens:** ~200 a 500 tokens por lectura y edición.
- **Riesgo:** Prácticamente cero, ya que el asistente sólo modifica valores de texto o propiedades específicas en un archivo JSON/JS plano.

### En el caso de EJ Monjo:
- **Sobrecarga de contexto:** Si se edita en el código compilado (`public_html/assets/index-*.js`), el archivo minificado pesa más de **280 KB** en líneas de más de 20,000 caracteres, consumiendo miles de tokens solo para ubicar y verificar la sintaxis de los cierres de componentes (`s.jsx`, `s.jsxs`, `children`).
- Si se edita en el código fuente de React (`src/`), el agente debe cargar el componente (`ContactoView.tsx` o `App.tsx`), `data.ts`, types, y luego ejecutar el build `npm run build` para generar los assets de distribución.
- **Consumo de tokens:** 3,000 a 10,000+ tokens por iteración para localizar, validar y comprobar que el bundle no tenga errores de sintaxis (`node -c`).

---

## 6. Conclusión y Recomendación para Futuros Proyectos

- **Usa el modelo de Enzava (Vanilla HTML + JS Data):**
  - Para catálogos, sitios informativos, landings comerciales, sitios de afiliación y menús digitales.
  - Cuando el cliente o equipo requiera actualizar datos constantemente (precios, teléfonos, fotos, productos) de forma rápida y con el menor costo de tokens de IA.

- **Usa el modelo de EJ Monjo (React + Vite):**
  - Para aplicaciones web interactivas (dashboards, configuradores de productos en tiempo real, cotizadores complejos paso a paso, portales con autenticación de usuarios).
  - **Recomendación de mejora para EJ Monjo:** Para no gastar tokens editando bundles minificados, se recomienda desacoplar los datos de contacto y catálogo a un archivo de datos JSON plano o `.json` externo cargado vía `fetch()`, de modo que los textos y números se modifiquen en 2 líneas sin tocar el código de la aplicación.
