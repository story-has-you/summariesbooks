import { selectCount, selectList } from "@/service/book_summary";
import { ok } from "@/utils/api"

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const current = parseInt(searchParams.get("current"))
  const limit = parseInt(searchParams.get("limit"))
  const start = (current - 1) * limit;
  const end = start + limit - 1;
  const books = await selectList(start, end);
  const count = await selectCount()
  if (!books) {
    return ok({ books: [], count: 0 });
  }
  return ok({ books, count });
}
