import './style.css';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

function initCookieBanner() {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Wir verwenden Cookies, um unsere Website und unseren Service zu optimieren. <a href="https://www.projekt-husky.de/datenschutzerklaerung/" target="_blank" style="text-decoration: underline;">Datenschutzerklärung</a></p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="btn btn-primary" style="padding: 0.5rem 1rem;">Akzeptieren</button>
                    <button id="reject-cookies" class="btn btn-outline" style="padding: 0.5rem 1rem;">Ablehnen</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.remove();
        });

        document.getElementById('reject-cookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            banner.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    initCookieBanner();
});
