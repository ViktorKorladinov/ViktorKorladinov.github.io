import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  // base: '/scheduling-seminar',
  integrations: [tailwind()], // ← Use integrations, not vite.plugins
});