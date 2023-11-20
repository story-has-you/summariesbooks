'use client';

import Bookshelf from './components/Bookshelf';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import { BookReview } from './types/BookReview';
import Skeleton from './components/Skeleton';

export default function Home() {
  const [books, setBooks] = useState<BookReview[]>([]);
  const [loading, setLoading] = useState<Boolean>(false)

  const fetchBookList = async () => {
    setLoading(true)
    const res = await fetch('/api/bookList', { cache: 'force-cache' });
    if (res) {
      const bookList = await res.json();
      setBooks(bookList);
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
        loading ? <Skeleton /> : <Bookshelf books={books} />
      }
      
    </main>
  );
}
