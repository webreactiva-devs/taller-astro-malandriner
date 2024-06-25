import { db, Votes } from "astro:db";

export default async function () {
  await db.insert(Votes).values([
    { postId: "post1", count: 1 },
    { postId: "post2", count: 1 },
  ]);
}
