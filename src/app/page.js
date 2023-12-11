import Bookshelf from "@/components/Bookshelf";
import { request } from "@/utils/api";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";

const fetchBooks = async () => {
  const { data } = await request("/api/books");
  return data;
};

export default async () => {
  const books = await fetchBooks();

  return (
    <main>
      <Header />
      <Brand />
      <Bookshelf books={books}></Bookshelf>
      <Footer />
    </main>
  );
};
