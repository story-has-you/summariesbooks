import { supabase } from '@/supabase.config';

export async function selectList() {
  const { data, error } = await supabase
    .from('book_review')
    .select('id, book_name, book_author, cover_url')
    .order('create_time', { ascending: true });
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

export async function search(name: String) {
  const { data, error } = await supabase
    .from('book_review')
    .select()
    .like('book_name', `%${name}%`);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
