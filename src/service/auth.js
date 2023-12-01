import { supabase } from "@/utils/supabase";

export const signUpNewUser = async (email, password, emailRedirectTo) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: emailRedirectTo,
    },
  });
  return handleError(data, error);
};

export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return handleError(data, error);
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};
