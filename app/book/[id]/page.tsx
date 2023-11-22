'use client';
import { BookSummary } from '@/app/types/BookSummary';
import Book from '../../components/Book';

import { useEffect, useState } from 'react';

export default ({ params }) => {
  const [book, setBook] = useState<BookSummary>({} as BookSummary);
  const [loading, setLoading] = useState<Boolean>(false)

  const fetchBook = async () => {
    setLoading(true)
    const res = await fetch(`/api/book/${params.id}`);
    if (res) {
      const { data } = await res.json();
      setBook(data);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Book book={book} loading={loading}></Book>
    </>
  );
};
