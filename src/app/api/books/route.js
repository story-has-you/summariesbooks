import { selectCount, selectList } from "@/service/book_summary";
import { ok } from "@/utils/api"

export async function GET(req) {
  const booksData = selectList();
  const countData = selectCount()
  const [books, count] = await Promise.all([booksData, countData])
  if (!books) {
    return ok({ books: [], count: 0 });
  }
  return ok({ books, count });
}
