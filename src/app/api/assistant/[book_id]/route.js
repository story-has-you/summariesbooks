import { selectOne } from "@/service/book_assistant_relation";
import { fail, ok } from "@/utils/api";

export async function GET(request, context) {
  try {
    const { params } = context;
    const data = await selectOne(params.book_id);
    if (data) {
      return ok(data);
    }
  } catch (error) {

  }
  return fail();
}
