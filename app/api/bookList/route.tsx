import { selectList } from '../../models/BookReview';

export async function GET(request: Request) {
  const bookList = await selectList();
  return Response.json(bookList);
}
