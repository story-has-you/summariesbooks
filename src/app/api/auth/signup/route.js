import { signInWithEmail, signUpNewUser } from "@/service/auth";
import { fail, ok } from "@/utils/api";
import { headers } from "next/headers";

export async function POST(request) {
  const origin = headers().get("origin");
  const { email, password, username } = await request.json();
  const userInfo = initUser(username);
  const data = await signUpNewUser(
    email,
    password,
    userInfo,
    `${origin}/auth/callback`
  );
  console.log(data);
  return ok("The verification email has been sent, please check the email");
}

const initUser = (username) => {
  return {
    username: username,
  };
};
