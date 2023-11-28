import { selectDetail } from '@/models/book_summary';


export async function GET(request, context) {
  const { params } = context
  const bookDetail = await selectDetail(params.id);
  return Response.json({ data: bookDetail });
}
