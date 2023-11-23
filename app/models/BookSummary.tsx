import { supabase } from '@/supabase.config';
import { BookSummary } from '../types/BookSummary';

export async function selectList() {
  const { data, error } = await supabase
    .from('book_summary')
    .select('id, book_name, book_author, cover_url')
    .order('create_time', { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function selectDetail(name: String) {
  const { data, error } = await supabase
    .from('book_summary')
    .select()
    .eq('book_name', name);
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
}

export async function search(name: String) {
  const { data, error } = await supabase
    .from('book_summary')
    .select()
    .ilike('book_name', `%${name}%`)
    .order('create_time', { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function insert(value: BookSummary) {
  const { status, error } = await supabase
    .from('countries')
    .insert({ ...value });
  if (error) {
    throw new Error(error.message);
  }
  return status;
}