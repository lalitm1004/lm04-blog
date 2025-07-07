import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: () => z.object({
        meta_title: z.string().optional(),
        title: z.string(),
        description: z.string(),
        publish_date: z.coerce.date(),
        is_published: z.boolean().default(false),
        blog_tags: z.array(z.string()).default([]).nullable()
    }),
});

export const collections = { blog };