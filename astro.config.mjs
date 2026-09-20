import { defineConfig } from 'astro/config';

// Minimal config on purpose. This is a static content site, so there's
// nothing to configure yet. When you add a real domain, set `site` below
// (e.g. 'https://yourorg.org') so canonical URLs and sitemaps are correct.
export default defineConfig({
  // site: 'https://yourorg.org',
  // Use the port the harness assigns (PORT env), falling back to Astro's default.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
});
