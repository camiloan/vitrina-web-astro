// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const showcaseCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tech: z.enum(['Astro', 'React', 'Angular', 'JavaScript', 'CSS']),
        tags: z.array(z.string()),
        thumbnail: z.string().optional(),
        pubDate: z.date(),
    }),
});

export const collections = {
    'showcase': showcaseCollection,
};