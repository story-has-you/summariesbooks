import { selectOne } from "@/service/book_assistant_relation"

export async function GET(request, context) {
  const { params } = context
  const data = await selectOne(params.book_id)
  if (data) {
    return Response.json({ data })
  }
  return Response.json({ data: null })
}
