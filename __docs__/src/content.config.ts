import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { docs };
