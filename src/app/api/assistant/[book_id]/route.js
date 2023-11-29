import { selectOne } from "@/service/book_assistant_relation";

export async function GET(request, context) {
  const { params } = context;
  const data = await selectOne(params.book_id);
  if (data.length > 0) {
    return Response.json({ data: data[0] });
  }
  return Response.json({});
}
