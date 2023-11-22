import { search } from '@/app/models/BookSummary';

export async function POST(request: Request) {
  const { keywords } = await request.json();
  const books = await search(keywords);
  if (!books) {
    return Response.json({ data: [] });
  }
  return Response.json({ data: books });
}
