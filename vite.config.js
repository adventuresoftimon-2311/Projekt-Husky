import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        quality: resolve(__dirname, 'quality.html'),
        youth: resolve(__dirname, 'youth-services.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
