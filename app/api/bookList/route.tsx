import { selectList } from '../../models/BookSummary';

export async function GET(request: Request) {
  const bookList = await selectList();
  if (!bookList) {
    return Response.json({ data: [] });
  }
  return Response.json({ data: bookList });
}
