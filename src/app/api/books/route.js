import { selectList } from "@/service/book_summary";
import { ok } from "@/utils/api";

export async function GET() {
  const bookList = await selectList();
  if (!bookList) {
    return ok([]);
  }
  return ok(bookList);
}
