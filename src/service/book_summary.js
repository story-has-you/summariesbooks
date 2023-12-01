import { supabase } from "@/utils/supabase";

export async function selectList() {
  const { data, error } = await supabase
    .from("book_summary")
    .select("id, book_name, book_author, cover_url")
    .order("create_time", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function selectDetail(id) {
  const { data, error } = await supabase
    .from("book_summary")
    .select()
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function search(name) {
  const { data, error } = await supabase
    .from("book_summary")
    .select()
    .ilike("book_name", `%${name}%`)
    .order("create_time", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function insert(value) {
  const { status, error } = await supabase
    .from("countries")
    .insert({ ...value });
  if (error) {
    throw new Error(error.message);
  }
  return status;
}
