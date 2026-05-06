import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://certyakbar.github.io',
  base: '/roofing-automation-stack',
  integrations: [
    sitemap(),
  ],
  output: 'static',
});
