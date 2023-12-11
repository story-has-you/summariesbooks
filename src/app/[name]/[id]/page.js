import Book from "@/components/Book";
import { request } from "@/utils/api";

const fetchBook = async (id) => {
  try {
    const { data } = await request(`/api/book/${id}`);
    return data
  } catch (error) {
    console.error("Error fetching book:", error);
  }
  return {}
};

const fetchAssistant = async (id) => {
  try {
    const { data } = await request(`/api/assistant/${id}`);
    return data
  } catch (error) {
    console.error("Error fetching book:", error);
  }
  return {}
};

export default async ({ params }) => {
  const book = await fetchBook(params.id)
  const assistant = await fetchAssistant(params.id)
  return (
    <Book book={book} assistant={assistant} />
  );
};
