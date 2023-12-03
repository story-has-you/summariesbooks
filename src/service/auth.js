import { supabaseServer } from "@/utils/supabase/server";
import { handleError } from "@/utils/util";
import { cookies } from "next/headers";

export const signUpNewUser = async (
  email,
  password,
  userInfo,
  emailRedirectTo
) => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: emailRedirectTo,
      data: { ...userInfo },
    },
  });
  return handleError(data, error);
};

export const signInWithEmail = async (email, password) => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return handleError(data, error);
};

export const signOut = async () => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  const { error } = await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  const { data, error } = await supabase.auth.getUser()
  console.log(data);
  return handleError(data, error);
};

export const exchangeCodeForSession = async (code) => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  await supabase.auth.exchangeCodeForSession(code);
};


export const getSession = async () => {
  const cookieStore = cookies();
  const supabase = supabaseServer(cookieStore);
  const { data, error } = await supabase.auth.getSession()
  console.log(data);
  return handleError(data, error);
};
