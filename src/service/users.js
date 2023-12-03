import { supabaseClient } from "@/utils/supabase/client";
import { supabaseServer } from "@/utils/supabase/server";
import { handleError } from "@/utils/util";
import { cookies } from "next/headers";

export const insert = async (user) => {
  const supabase = supabaseClient();
  const { data, error } = await supabase.from("users").insert([{ ...user }]);
  return handleError(data, error);
}

export const updateOpenaiKey = async (id, openai_key) => {
  const supabase = supabaseClient();
  const { data } = await supabase.from("users").update({ openai_key: { ...openai_key } }).eq("id", id).select();
  return data
}

export const selectById = async (id) => {
  const supabase = supabaseClient();
  const { data, error } = await supabase.from("users").select().eq("id", id).single();
  return handleError(data, error);
}
