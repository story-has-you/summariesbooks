import Book from "@/components/Book";
import { request } from "@/utils/api";

const fetchBook = async (id) => {
  try {
    const { data } = await request(`/api/book/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching book:", error);
  }
  return {};
};

const fetchAssistant = async (id) => {
  try {
    const { data } = await request(`/api/assistant/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching book:", error);
  }
  return {};
};

export async function generateMetadata({ params, searchParams }, parent) {
  // 读取路由参数
  const { name, id } = params;

  // 获取数据
  const book = await fetchBook(id);

  return {
    title: book.book_name,
    description: `Chat With ${book.book_name}`,
    alternates: {
      canonical: `https://summariesbooks.com/${name}/${id}`,
    },
  };
}

export default async ({ params }) => {
  const book = await fetchBook(params.id);
  const assistant = await fetchAssistant(params.id);
  return <Book book={book} assistant={assistant} />;
};
