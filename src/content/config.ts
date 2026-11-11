import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "data",
  schema: z.object({
    org: z.string(),
    role: z.string(),
    advisor: z.string().optional(),
    sponsor: z.string().optional(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    bullets: z.array(z.string()),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    org: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    summary: z.string(),
    bullets: z.array(z.string()),
    order: z.number(),
  }),
});

const publications = defineCollection({
  type: "data",
  schema: z.object({
    authors: z.string(),
    title: z.string(),
    venue: z.string(),
    date: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
  }),
});

export const collections = { experience, projects, publications, blog, news };
