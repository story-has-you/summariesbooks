import { supabase } from '@/supabase.config';

export async function selectList() {
  const { data, error } = await supabase
    .from('book_review')
    .select('id, book_name, book_author, cover_url');
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function selectDetail(id: String) {
  const { data, error } = await supabase
    .from('book_review')
    .select()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
}
