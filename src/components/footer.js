export function renderFooter() {
    const footerHtml = `
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
  `;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}
