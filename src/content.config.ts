import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fieldWork = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field-work' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { 'field-work': fieldWork };
