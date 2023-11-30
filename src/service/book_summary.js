import { sql, db } from "@vercel/postgres";

export async function selectList() {
  const { rows } =
    await sql`select id, book_name, book_author, cover_url from book_summary order by create_time asc`;
  return rows;
}

export async function selectDetail(id) {
  const { rows } = await sql`select * from book_summary where id = ${id}`;
  return rows[0];
}

export async function search(name) {
  const query =
    "SELECT * FROM book_summary WHERE book_name ilike $1 ORDER BY create_time ASC";
  const values = [`%${name}%`];
  const client = await db.connect();
  const { rows } = await client.query(query, values);
  return rows;
}
