"use client";

import Producthunt from "@/components/Producthunt";
import Search from "@/components/Search";
import Skeleton from "@/components/Skeleton";
import Bookshelf from "@/components/Bookshelf";
import { useEffect, useState } from "react";
import fetchAPI from "@/utils/api";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookList = async () => {
    setLoading(true);

    const { data } = await fetchAPI("/api/books");
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <main>
      <Producthunt />
      <Search setBooks={setBooks} setLoading={setLoading} />
      {loading ? <Skeleton count={30} /> : <Bookshelf books={books} />}
    </main>
  );
}
