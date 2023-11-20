import { search } from '@/app/models/BookReview';

export async function POST(request: Request) {
  const { keywords } = await request.json();
  const books = await search(keywords);
  if (!books) {
    return Response.json([]);
  }
  return Response.json(books);
}
