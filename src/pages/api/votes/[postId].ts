// src/pages/api/vote/[postId].ts
import type { APIRoute } from "astro";
import { db, Votes, eq } from "astro:db";
export const prerender = false;


export const POST: APIRoute = async ({ params }) => {
  const { postId } = params;
  let votes = 0;

  if (typeof postId === "string") {
    await db.insert(Votes).values({ postId, count: 1 });
    const currentVotes = await db
      .select()
      .from(Votes)
      .where(eq(Votes.postId, postId));
    votes = currentVotes.length;
  }

  return new Response(
    JSON.stringify({votes}),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
