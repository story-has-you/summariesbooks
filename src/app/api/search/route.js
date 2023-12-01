import { search } from "@/service/book_summary";
import { ok } from "@/utils/api";

export async function POST(request) {
  const { keywords } = await request.json();
  const books = await search(keywords);
  return ok(books);
}
