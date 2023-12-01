import { signInWithEmail } from "@/service/auth";
import { fail, ok } from "@/utils/api";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const { data } = await signInWithEmail(email, password);
    return ok(data);
  } catch (error) {
    return fail(error.message);
  }
}
