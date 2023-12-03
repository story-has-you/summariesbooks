import { supabaseClient } from "@/utils/supabase/client";
import { handleError } from "@/utils/util";

export const selectOne = async (book_id) => {
  const supabase = supabaseClient();
  const { data, error } = await supabase
    .from("book_assistant_relation")
    .select()
    .eq("book_id", book_id)
    .single()
  return handleError(data, error);
};
