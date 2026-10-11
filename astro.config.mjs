// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bluebytevietnam.com',
  trailingSlash: 'always',
  // "/" chuyển hướng về ngôn ngữ mặc định (khớp với defaultLocale trong src/i18n/config.ts).
  redirects: {
    '/': '/vi/',
  },
});
