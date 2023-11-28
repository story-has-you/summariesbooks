import { selectList } from "../../../models/book_summary"

export async function GET(request) {
  const bookList = await selectList()
  if (!bookList) {
    return Response.json({ data: [] })
  }
  return Response.json({ data: bookList })
}
