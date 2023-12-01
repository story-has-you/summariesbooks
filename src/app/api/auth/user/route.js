import { getCurrentUser } from "@/service/auth";
import { fail, ok } from "@/utils/api";

export async function GET(request) {
  const { user } = await getCurrentUser();
  if (!user) {
    return fail();
  }
  return ok(user.user_metadata.username);
}
