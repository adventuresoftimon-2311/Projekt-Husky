import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'), // Keeping original for fallback/redirect if needed
        aboutKonzeption: resolve(__dirname, 'about-konzeption.html'),
        aboutLeitung: resolve(__dirname, 'about-leitung.html'),
        aboutKoordination: resolve(__dirname, 'about-koordination.html'),
        aboutStandorte: resolve(__dirname, 'about-standorte.html'),
        quality: resolve(__dirname, 'quality.html'), // Keeping original
        qualityZiele: resolve(__dirname, 'quality-ziele.html'),
        qualityLeitsaetze: resolve(__dirname, 'quality-leitsaetze.html'),
        qualityVernetzung: resolve(__dirname, 'quality-vernetzung.html'),
        youth: resolve(__dirname, 'youth-services.html'), // Keeping original
        youthUeber: resolve(__dirname, 'youth-ueber.html'),
        youthKidsbuch: resolve(__dirname, 'youth-kidsbuch.html'),
        youthErziehungsstellen: resolve(__dirname, 'youth-erziehungsstellen.html'),
        fasdBeratung: resolve(__dirname, 'fasd-beratung.html'),
        contact: resolve(__dirname, 'contact.html'), // Keeping original
        contactAnsprechpartner: resolve(__dirname, 'contact-ansprechpartner.html'),
        contactKarriere: resolve(__dirname, 'contact-karriere.html'),
        contactFormular: resolve(__dirname, 'contact-formular.html'),
        downloads: resolve(__dirname, 'downloads.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        accessibility: resolve(__dirname, 'accessibility.html'),
        newsOstfalia: resolve(__dirname, 'news-ostfalia.html'),
        newsSchutzkonzept: resolve(__dirname, 'news-schutzkonzept.html')
      }
    }
  }
});
