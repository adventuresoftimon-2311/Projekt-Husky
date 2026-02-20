export function renderHeader() {
    const headerHtml = `
    <header class="site-header">
      <div class="container header-container">
        <a href="/" class="logo">
          Projekt <strong>Husky</strong>
        </a>
        <button class="mobile-toggle" aria-label="Menu öffnen">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="/">Startseite</a></li>
            <li><a href="/about.html">Über uns</a></li>
            <li><a href="/quality.html">Qualität</a></li>
            <li><a href="/youth-services.html">Angebote & Jugendliche</a></li>
            <li><a href="/contact.html" class="btn btn-primary">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // Active state
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
            if (currentPath === '/' && link.getAttribute('href') !== '/') return;
            link.classList.add('active');
        }
    });

    // Mobile menu toggle logic
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.main-nav');
    toggle.addEventListener('click', () => {
        nav.classList.toggle('is-open');
    });

    // Sticky header logic
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
