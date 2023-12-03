import { getCurrentUser } from "@/service/auth";
import { selectById, updateOpenaiKey } from "@/service/users";
import { fail, ok } from "@/utils/api";

export async function GET(request) {
  const { user } = await getCurrentUser();
  if (!user) {
    return fail();
  }
  const data = await selectById(user.id)
  return ok(data);
}

export async function PUT(request) {
  const { id, openai_key } = await request.json();
  const { data } = await updateOpenaiKey(id, openai_key);
  return ok(data)
}
