import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    canonicalURL: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { blog };