import { defineDb, defineTable, column } from "astro:db";

const Votes = defineTable({
  columns: {
    postId: column.text(),
    count: column.number(),
  },
});

export default defineDb({
  tables: { Votes },
});
