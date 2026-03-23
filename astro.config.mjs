// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cc1.github.io',
  base: '/bgw',
  vite: {
    plugins: [tailwindcss()]
  }
});
