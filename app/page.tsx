'use client';

import Bookshelf from './components/Bookshelf';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

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
      <Bookshelf books={books} />
    </main>
  );
}
