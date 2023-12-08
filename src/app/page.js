"use client";

import Producthunt from "@/components/Producthunt";
import Search from "@/components/Search";
import Skeleton from "@/components/Skeleton";
import Bookshelf from "@/components/Bookshelf";
import { useEffect, useState } from "react";
import { request } from "@/utils/api";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookList = async () => {
    setLoading(true);

    const { data } = await request("/api/books");
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <main className="bg-orange-50">
      <Header />
      <Brand />
      <Producthunt />
      <Search setBooks={setBooks} setLoading={setLoading} />
      {loading ? <Skeleton count={30} /> : <Bookshelf books={books} />}
      <Footer />
    </main>
  );
}
