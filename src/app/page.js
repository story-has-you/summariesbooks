import Producthunt from "@/components/Producthunt";
import Search from "@/components/Search";
import Bookshelf from "@/components/Bookshelf";
import { request } from "@/utils/api";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";


const fetchBooks = async () => {
  const { data } = await request("/api/books");
  return data
};

const searchBooks = async (keywords, books) => {
  'use server'
  const { data } = await request("/api/search", {
    method: "POST",
    body: JSON.stringify({ keywords: keywords.trim() })
  })
  books = data
}

export default async () => {
  const books = await fetchBooks();

  return (
    <main>
      <Header />
      <Brand />
      <Producthunt />
      {/* <Search searchBooks={searchBooks} books={books} /> */}
      <Bookshelf books={books}></Bookshelf>
      <Footer />
    </main>
  );
}
