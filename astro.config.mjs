// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://joaquin021.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
});
