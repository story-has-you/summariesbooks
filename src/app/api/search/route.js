import { search } from "@/service/book_summary";

export async function POST(request) {
  const { keywords } = await request.json();
  const books = await search(keywords);
  if (!books) {
    return Response.json({ data: [] });
  }
  return Response.json({ data: books });
}
