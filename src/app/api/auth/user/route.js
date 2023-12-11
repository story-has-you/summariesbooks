import { getCurrentUser, updateUser } from "@/service/auth";
import { selectById, updateOpenaiKey } from "@/service/users";
import { fail, ok } from "@/utils/api";

export async function GET(request) {
  try {
    const { user } = await getCurrentUser();
    if (!user) {
      return fail();
    }
    const data = await selectById(user.id);
    return ok(data);
  } catch (error) { }
  return fail();
}

export async function PUT(request) {
  const { id, openai_key } = await request.json();
  const { data } = await updateOpenaiKey(id, openai_key);
  await updateUser(openai_key);
  return ok(data);
}
