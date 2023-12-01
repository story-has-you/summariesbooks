import { selectDetail } from "@/service/book_summary";
import { ok } from "@/utils/api";

export async function GET(request, context) {
  const { params } = context;
  const bookDetail = await selectDetail(params.id);
  return ok(bookDetail);
}
