import { selectList } from '../../models/BookSummary';

export async function GET(request: Request) {
  const bookList = await selectList();
  return Response.json({ data: bookList });
}
