import Bookshelf from "@/components/Bookshelf";
import { request } from "@/utils/api";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Summarize books and talk to books",
  description: "uses GPTs to chat with book",
  alternates: {
    canonical: "https://summariesbooks.com",
  },
};

const fetchBooks = async () => {
  const { data } = await request("/api/books", { params: { current: 1, limit: 100 } });
  return data;
};

export default async () => {
  const { books, count } = await fetchBooks();
  return (
    <main>
      <Header />
      <Brand />
      <Bookshelf initialBooks={books} count={count} />
      <Footer />
    </main>
  );
};
