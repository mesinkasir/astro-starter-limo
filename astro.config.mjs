import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  site: 'https://limousine.netlify.app',
  integrations: [sitemap()],
});
