import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ViktorKorladinov.github.io',
  integrations: [tailwind()], // ← Use integrations, not vite.plugins
});