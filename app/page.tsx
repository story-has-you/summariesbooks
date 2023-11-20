'use client';

import Bookshelf from './components/Bookshelf';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import { BookReview } from './types/BookReview';

export default function Home() {
  const [books, setBooks] = useState<BookReview[]>([]);

  const fetchBookList = async () => {
    const res = await fetch('/api/bookList', { cache: 'force-cache' });
    if (res) {
      const bookList = await res.json();
      setBooks(bookList);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <main>
      <Search setBooks={setBooks} />
      <Bookshelf books={books} />
    </main>
  );
}
