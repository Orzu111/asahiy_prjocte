import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  products: defineTable({
    title: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    description: v.string(),
    rating: v.object({
      rate: v.number(),
      count: v.number(),
    }),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
