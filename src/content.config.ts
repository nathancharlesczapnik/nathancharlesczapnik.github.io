import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/essays" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoDescription: z.string().optional(),
    label: z.string(),
    introduction: z.string(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
    })).min(1),
  }),
});

export const collections = { essays };
