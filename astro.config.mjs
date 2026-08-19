import { defineConfig } from 'astro/config';

export default defineConfig({
  // Served from the root of its own domain, not from a GitHub Pages subpath —
  // a leftover `base: '/aiworld'` made every asset URL 404 while the page itself
  // returned 200, so the site loaded unstyled with no error anywhere.
  site: 'https://aiworld.aisvet.sk',
  output: 'static',
});
