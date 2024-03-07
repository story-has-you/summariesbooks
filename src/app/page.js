import Bookshelf from "@/components/Bookshelf";
import { request } from "@/utils/api";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Script from "next/script";

const fetchBooks = async () => {
  const { data } = await request("/api/books", { cache: "no-cache" });
  return data;
};

const fetchJsonLd = (books) => {
  return books.map((book) => ({
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.book_name,
    image: book.cover_url,
    description: book.book_name,
  }));
};

export default async () => {
  const { books, count } = await fetchBooks();
  const jsonLd = fetchJsonLd(books);
  return (
    <main>
      <Header />
      <Brand />
      <Bookshelf initialBooks={books} count={count} />
      <Footer />
      <Script
        strategy="lazyOnload"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
};
