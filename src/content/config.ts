import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      links: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })).optional(),
      last_updated_at: z.date().optional(),
      redirect: z.string().optional(),
    }),
  }),

  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      icon: z.string().optional(),
      screenshots: z.array(z.object({
        src: z.string(),
        alt: z.string(),
      })),
      links: z.array(z.object({
        name: z.string(),
        url: z.string(),
      })).optional(),
    }),
  }),
};
