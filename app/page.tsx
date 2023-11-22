'use client';

import Bookshelf from './components/Bookshelf';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import { BookSummary } from './types/BookSummary';
import Skeleton from './components/Skeleton';

export default function Home() {
  const [books, setBooks] = useState<BookSummary[]>([]);
  const [loading, setLoading] = useState<Boolean>(false)

  const fetchBookList = async () => {
    setLoading(true)
    const res = await fetch('/api/bookList');
    if (res) {
      const { data } = await res.json();
      setBooks(data);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <main>
      <Search setBooks={setBooks} setLoading={setLoading} />
      {

        loading ? <Skeleton count={30} /> : <Bookshelf books={books} />
      }

    </main>
  );
}
