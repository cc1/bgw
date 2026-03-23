import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const organizations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/organizations' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { organizations };
