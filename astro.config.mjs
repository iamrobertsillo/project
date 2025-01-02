import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import lenis from 'astro-lenis';

// Get available languages from i18n directory
const languages = ['it', 'en', 'de'];

export default defineConfig({
  integrations: [tailwind(), lenis()],
  i18n: {
    defaultLocale: 'it',
    locales: languages,
    routing: {
      prefixDefaultLocale: false
    }
  }
});