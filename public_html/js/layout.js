/**
 * layout.js - EJ Monjo Carpintería
 * Componente modular para inyección de Header, Footer y Botón Flotante de WhatsApp.
 * Estilo desacoplado MPA similar a Enzava.
 */

(function () {
  // Detectar la página actual a partir del pathname
  const path = window.location.pathname.toLowerCase();
  let activePage = 'inicio';
  if (path.includes('muebles-a-la-medida')) activePage = 'muebles';
  else if (path.includes('portafolio')) activePage = 'portafolio';
  else if (path.includes('contacto')) activePage = 'contacto';
  else activePage = 'inicio';

  // Base path para enlaces y assets
  const isEjmonjoPath = path.includes('/ejmonjo/');
  const basePath = isEjmonjoPath ? '/ejmonjo/' : './';

  const links = [
    { id: 'inicio', label: 'Inicio', url: isEjmonjoPath ? '/ejmonjo/' : 'index.html' },
    { id: 'muebles', label: 'Muebles a la Medida', url: isEjmonjoPath ? '/ejmonjo/muebles-a-la-medida' : 'muebles-a-la-medida.html' },
    { id: 'portafolio', label: 'Portafolio', url: isEjmonjoPath ? '/ejmonjo/portafolio' : 'portafolio.html' },
    { id: 'contacto', label: 'Contacto', url: isEjmonjoPath ? '/ejmonjo/contacto' : 'contacto.html' }
  ];

  const WHATSAPP_ICON_SVG = (classes = "w-4 h-4 fill-white") => `
    <svg class="${classes} shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  `;
  window.WHATSAPP_ICON_SVG = WHATSAPP_ICON_SVG;

  function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    const navLinksHtml = links.map(link => {
      const isActive = link.id === activePage;
      return `
        <a href="${link.url}" 
           class="text-sm font-medium transition-colors py-1 border-b-2 ${
             isActive 
               ? 'text-[#5d4037] border-[#8B5E3C] font-semibold' 
               : 'text-[#5c5f5e] border-transparent hover:text-[#1a1c1c] hover:border-[#d4c3be]'
           }">
          ${link.label}
        </a>
      `;
    }).join('');

    const mobileLinksHtml = links.map(link => {
      const isActive = link.id === activePage;
      return `
        <a href="${link.url}" 
           class="block py-2.5 px-4 rounded-lg text-base font-medium transition-colors ${
             isActive 
               ? 'bg-[#f4eeeb] text-[#5d4037] font-semibold' 
               : 'text-[#444] hover:bg-[#f9f9f8]'
           }">
          ${link.label}
        </a>
      `;
    }).join('');

    const waHeaderUrl = typeof getWhatsAppUrl === 'function' 
      ? getWhatsAppUrl('Hola EJ Monjo, me gustaría cotizar un proyecto de carpintería.')
      : 'https://wa.me/523311757837';

    headerContainer.innerHTML = `
      <header class="sticky top-0 z-50 bg-[#f9f9f8]/90 backdrop-blur-md border-b border-[#e5dedb] transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo: ej_monjo_logo_v1.webp sin textos redundantes -->
            <a href="${isEjmonjoPath ? '/ejmonjo/' : 'index.html'}" class="flex items-center gap-3 group">
              <img 
                src="/ejmonjo/assets/logos/ej_monjo_logo_v1.webp" 
                alt="EJ Monjo Carpintería" 
                class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8">
              ${navLinksHtml}
            </nav>

            <!-- Header Action CTA -->
            <div class="hidden md:flex items-center">
              <a 
                href="${waHeaderUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                ${WHATSAPP_ICON_SVG("w-4 h-4 fill-white")}
                <span>Cotizar Proyecto</span>
              </a>
            </div>

            <!-- Mobile menu button -->
            <div class="flex md:hidden">
              <button 
                id="mobile-menu-btn" 
                type="button" 
                class="p-2 rounded-lg text-[#5d4037] hover:bg-[#eee8e5] focus:outline-none"
                aria-label="Abrir menú"
              >
                <svg id="menu-icon-open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg id="menu-icon-close" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Nav Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-[#e5dedb] bg-[#f9f9f8] px-4 pt-3 pb-6 shadow-xl">
          <div class="space-y-1">
            ${mobileLinksHtml}
          </div>
          <div class="mt-4 pt-4 border-t border-[#e5dedb]">
            <a 
              href="${waHeaderUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium py-3 px-4 rounded-xl shadow-sm text-sm"
            >
              ${WHATSAPP_ICON_SVG("w-5 h-5 fill-white")}
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      </header>
    `;

    // Listeners para el menú móvil
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isExpanded = !mobileMenu.classList.contains('hidden');
        if (isExpanded) {
          mobileMenu.classList.add('hidden');
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        } else {
          mobileMenu.classList.remove('hidden');
          menuIconOpen.classList.add('hidden');
          menuIconClose.classList.remove('hidden');
        }
      });
    }
  }

  function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    const contact = window.CONTACT_INFO || {
      brandName: "EJ Monjo Carpintería",
      phonePrimary: "33 1175 7837",
      phoneSecondary: "386 105 6316",
      address: "Zona Centro, Ahualulco de Mercado, Jalisco.",
      hoursWeekday: "8:00 am a 7:00 PM",
      hoursSaturday: "8:00 am a 2:00 PM",
      year: new Date().getFullYear(),
      sistellaUrl: "https://sistella.com.mx/sitio-web"
    };

    const currentYear = new Date().getFullYear();

    const waFooterUrl = typeof getWhatsAppUrl === 'function' 
      ? getWhatsAppUrl('Hola EJ Monjo, me gustaría pedir una cotización.')
      : 'https://wa.me/523311757837';

    footerContainer.innerHTML = `
      <footer class="bg-[#1f1614] text-[#d4c3be] pt-16 pb-12 border-t border-[#3a2822]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#3a2822]/70">
            <!-- Columna 1: Identidad con ej_monjo_logo_v1.webp -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <img 
                  src="/ejmonjo/assets/logos/ej_monjo_logo_v1.webp" 
                  alt="${contact.brandName}" 
                  class="h-10 sm:h-12 w-auto brightness-0 invert opacity-95"
                />
              </div>
              <p class="text-sm text-[#baa9a3] leading-relaxed">
                Taller de carpintería fina con más de 20 años de tradición artesanal. Especialistas en maderas nobles, muebles a la medida y proyectos residenciales en Jalisco.
              </p>
            </div>

            <!-- Columna 2: Navegación -->
            <div>
              <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4">Navegación</h4>
              <ul class="space-y-2.5 text-sm">
                <li><a href="${isEjmonjoPath ? '/ejmonjo/' : 'index.html'}" class="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="${isEjmonjoPath ? '/ejmonjo/muebles-a-la-medida' : 'muebles-a-la-medida.html'}" class="hover:text-white transition-colors">Muebles a la Medida</a></li>
                <li><a href="${isEjmonjoPath ? '/ejmonjo/portafolio' : 'portafolio.html'}" class="hover:text-white transition-colors">Portafolio</a></li>
                <li><a href="${isEjmonjoPath ? '/ejmonjo/contacto' : 'contacto.html'}" class="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <!-- Columna 3: Taller y Ubicación -->
            <div>
              <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4">Taller Artesanal</h4>
              <p class="text-sm text-[#baa9a3] mb-3">
                ${contact.address}
              </p>
              <h5 class="text-xs font-semibold text-white/90 uppercase tracking-wider mt-4 mb-1">Horario de Atención</h5>
              <p class="text-xs text-[#baa9a3] leading-relaxed">
                Lunes a Viernes: ${contact.hoursWeekday}<br>
                Sábados: ${contact.hoursSaturday}
              </p>
            </div>

            <!-- Columna 4: Cotizaciones -->
            <div>
              <h4 class="text-white text-xs font-bold uppercase tracking-widest mb-4">Solicitar Cotización</h4>
              <div class="space-y-1 mb-4 text-sm font-mono text-[#f4eeeb]">
                <p>${contact.phonePrimary}</p>
                <p>${contact.phoneSecondary}</p>
              </div>
              <a 
                href="${waFooterUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                ${WHATSAPP_ICON_SVG("w-4 h-4 fill-white")}
                <span>Pedir cotización</span>
              </a>
            </div>
          </div>

          <!-- Bottom bar con logo oficial de Sistella sistella_hor_full.svg y año dinámico -->
          <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7a74] gap-4">
            <p>© ${currentYear} ${contact.brandName}. Todos los derechos reservados.</p>
            <div class="flex items-center gap-2">
              <span class="text-[#8c7a74]">Sitio web desarrollado por</span>
              <a 
                href="${contact.sistellaUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center hover:opacity-80 transition-opacity"
                title="Desarrollado por Sistella"
              >
                <img src="/ejmonjo/assets/logos/sistella_hor_full.svg" alt="Sistella" class="h-5 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderFloatingWhatsApp() {
    const waUrl = typeof getWhatsAppUrl === 'function' 
      ? getWhatsAppUrl('Hola EJ Monjo, me gustaría cotizar una pieza de carpintería.')
      : 'https://wa.me/523311757837';

    const div = document.createElement('div');
    div.id = 'floating-wa-container';
    div.className = 'fixed bottom-6 right-6 z-50';
    div.innerHTML = `
      <a 
        href="${waUrl}" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        class="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span class="absolute -top-10 right-0 hidden group-hover:block bg-[#1a1c1c] text-white text-xs py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-200">
          ¿En qué podemos ayudarte?
        </span>
        ${WHATSAPP_ICON_SVG("w-7 h-7 fill-white")}
      </a>
    `;
    document.body.appendChild(div);
  }

  // Inicializar al cargar el DOM
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    renderFloatingWhatsApp();
  });
})();
