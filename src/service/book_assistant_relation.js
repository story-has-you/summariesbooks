import { sql } from "@vercel/postgres";

export async function selectOne(book_id) {
  const { rows } =
    await sql`SELECT * from book_assistant_relation where book_id=${book_id}`;
  return rows[0];
}
