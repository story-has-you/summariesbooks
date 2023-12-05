import { signOut } from "@/service/auth";
import { fail, ok } from "@/utils/api";

export async function POST(request) {
  try {
    const error = await signOut();
    if (error) {
      return fail(error.message);
    }
    return ok();
  } catch (error) {
    return fail(error.message);
  }
}
