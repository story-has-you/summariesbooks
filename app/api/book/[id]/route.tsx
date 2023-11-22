import { selectDetail } from '../../../models/BookSummary';

export async function GET(request: Request, context) {
  const { params } = context;
  const bookDetail = await selectDetail(params.id);
  return Response.json({ data: bookDetail });
}
