(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();function s(){document.body.insertAdjacentHTML("afterbegin",`
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
  `);const r=window.location.pathname;document.querySelectorAll(".nav-list a").forEach(e=>{if(e.getAttribute("href")===r||r==="/"&&e.getAttribute("href")==="/"){if(r==="/"&&e.getAttribute("href")!=="/")return;e.classList.add("active")}});const i=document.querySelector(".mobile-toggle"),t=document.querySelector(".main-nav");i.addEventListener("click",()=>{t.classList.toggle("is-open")}),window.addEventListener("scroll",()=>{const e=document.querySelector(".site-header");window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")})}function a(){const n=`
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-brand">
          <h3>Projekt <strong>Husky</strong></h3>
          <p>Individualpädagogik in den Hilfen zur Erziehung. Wir bieten für eine kleine Gruppe deutlich belasteter Jugendlicher ein geeignetes Setting.</p>
        </div>
        <div class="footer-links">
          <h4>Kontakt</h4>
          <ul>
            <li><strong>Köln:</strong> 02234 9899711</li>
            <li><strong>Obernkirchen:</strong> 05724 9683 792</li>
            <li><a href="/contact.html">Weitere Infos & Karriere</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Rechtliches</h4>
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutzerklärung</a></li>
            <li><a href="#">Barrierefreiheit</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} Projekt Husky. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  `;document.body.insertAdjacentHTML("beforeend",n)}document.addEventListener("DOMContentLoaded",()=>{s(),a()});
