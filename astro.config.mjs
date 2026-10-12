// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domain bake lúc build (test vs production) — CI truyền SITE_URL, mặc định là production.
  site: process.env.SITE_URL || 'https://bluebytevietnam.com',
  trailingSlash: 'always',
  // "/" chuyển hướng về ngôn ngữ mặc định (khớp với defaultLocale trong src/i18n/config.ts).
  redirects: {
    '/': '/vi/',
  },
});
