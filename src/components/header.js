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
            <li class="has-dropdown">
                <a href="/about.html">Projekt Husky <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                <ul class="dropdown-menu">
                    <li><a href="/about.html#konzeption">Konzeption</a></li>
                    <li><a href="/about.html#leitung">Leitung & Historie</a></li>
                    <li><a href="/about.html#koordination">Koordination</a></li>
                    <li><a href="/about.html#standorte">Standorte</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="/youth-services.html">Jugendliche <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                <ul class="dropdown-menu">
                    <li><a href="/youth-services.html#jugendliche">Über Jugendliche</a></li>
                    <li><a href="/youth-services.html#kidsbuch">Kidsbuch</a></li>
                    <li><a href="/youth-services.html#erziehungsstellen">Erziehungsstellen</a></li>
                </ul>
            </li>
            <li><a href="/youth-services.html#fasd">FASD-Beratung</a></li>
            <li class="has-dropdown">
                <a href="/#aktuelles">Aktuelles <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                <ul class="dropdown-menu">
                    <li><a href="/news-ostfalia.html">Seminar Ostfalia</a></li>
                    <li><a href="/news-schutzkonzept.html">Schutzkonzept</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="/quality.html">Qualität <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                <ul class="dropdown-menu">
                    <li><a href="/quality.html#ziele">Ziele</a></li>
                    <li><a href="/quality.html#leitsaetze">Leitsätze</a></li>
                    <li><a href="/quality.html#vernetzung">Vernetzung & Praxis</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="/contact.html">Kontakt <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                <ul class="dropdown-menu">
                    <li><a href="/contact.html#ansprechpartner">Ansprechpartner</a></li>
                    <li><a href="/contact.html#karriere">Karriere</a></li>
                    <li><a href="/contact.html#formular">Nachricht senden</a></li>
                </ul>
            </li>
            <li><a href="/contact.html#downloads">Downloads</a></li>
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
