import { selectDetail } from '../../../models/BookReview';

export async function GET(request, context) {
  const { params } = context;
  const bookDetail = await selectDetail(params.id);
  return Response.json(bookDetail);
}
