import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'vier31https://.github.io',
  base: 'altes-haus-mit-garten',
  image: {
      domains: [
          'astro.build'
      ]
  },
  integrations: [tailwind()]
});