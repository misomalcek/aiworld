import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const clanky_en = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clanky-en' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['ai-v-praxi', 'ai-trendy', 'ai-zaklady']),
    date: z.coerce.date(),
    sk_slug: z.string(),
    excerpt: z.string().optional(),
    reading_time: z.number().optional(),
  }),
});

export const collections = { clanky_en };
