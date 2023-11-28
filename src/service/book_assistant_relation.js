import { supabase } from "@/utils/supabase"

export async function selectOne(book_id) {
  const { data, error } = await supabase
    .from("book_assistant_relation")
    .select()
    .eq("book_id", book_id)
    .single()
  if (error) {
    throw new Error(error.message)
  }
  return data
}
