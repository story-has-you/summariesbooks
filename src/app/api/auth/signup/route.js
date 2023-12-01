import { signUpNewUser } from "@/service/auth";
import { fail, ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  try {
    const origin = headers().get("origin");
    const { email, password, username } = await request.json();
    const userInfo = initUser(username);
    await signUpNewUser(email, password, userInfo, `${origin}/auth/callback`);
    return ok();
  } catch (error) {
    return fail(error.message);
  }
}

const initUser = (username) => {
  return {
    username: username,
  };
};
