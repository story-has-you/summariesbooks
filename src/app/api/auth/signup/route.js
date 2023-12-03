import { signUpNewUser } from "@/service/auth";
import { insert } from "@/service/users";
import { fail, ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  try {
    const origin = headers().get("origin");
    const { email, password, username } = await request.json();
    const supabaseUser = await signUpNewUser(email, password, { username }, `${origin}/api/auth/callback`);
    insert(initUser(supabaseUser, username));
    return ok();
  } catch (error) {
    return fail(error.message);
  }
}

const initUser = (supabaseUser, username) => {
  return {
    id: supabaseUser.user.id,
    email: supabaseUser.user.email,
    username: username,
    registration_date: new Date()
  };
};
