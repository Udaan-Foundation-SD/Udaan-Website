import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per partner in src/content/partners/ — the file name becomes the URL (/partners/<file-name>).
// Front matter holds the facts and photos; the Markdown body is their story.
const partners = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			nameHi: z.string().optional(), // name in Devanagari
			location: z.string(),
			tagline: z.string(),
			summary: z.string(),
			seoTitle: z.string().optional(), // e.g. "Gurukulam, Kanpur" ("| Udaan Foundation SD" is added)
			seoDescription: z.string().optional(), // 150–160 characters for search results; falls back to summary
			order: z.number().default(0), // lower numbers are listed first
			cover: image(),
			coverAlt: z.string(),
			coverCaption: z.string().optional(),
			stats: z
				.array(
					z.object({
						value: z.string(), // shown as-is, e.g. "~150"
						label: z.string(),
						count: z.number().optional(), // counts up to this when scrolled into view
						prefix: z.string().optional(),
					}),
				)
				.default([]),
			photos: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						caption: z.string(),
						portrait: z.boolean().default(false),
					}),
				)
				.default([]),
			press: z
				.object({
					image: image(),
					alt: z.string(),
					outlet: z.string(),
					date: z.string(),
					quote: z.string(),
					quoteNote: z.string().optional(),
				})
				.optional(),
		}),
});

export const collections = { partners };
