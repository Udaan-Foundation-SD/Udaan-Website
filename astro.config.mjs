// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// The live address — used for canonical links, share previews, structured data, and the sitemap.
	site: 'https://www.udaanfoundationsd.org',

	// GitHub Pages serves each page from a folder (/donate/ → donate/index.html), so URLs end in a slash.
	// Internal links use that exact form so nothing goes through a redirect.
	trailingSlash: 'always',

	integrations: [
		sitemap({
			// Keep the 404 and the unlisted team signature tool out of the sitemap
			filter: (page) => !page.includes('/404') && !page.includes('/signature-bvxdakmb'),
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
