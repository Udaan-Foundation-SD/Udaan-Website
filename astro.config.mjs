// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to the live domain once you have it (e.g. 'https://udaanfoundation.org').
  // It makes share previews and canonical links use full URLs.
  // site: 'https://your-domain.org',
  vite: {
    plugins: [tailwindcss()]
  }
});