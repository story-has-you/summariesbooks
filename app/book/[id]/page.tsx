'use client';
import { BookReview } from '@/app/types/BookReview';
import Book from '../../components/Book';

import { useEffect, useState } from 'react';
import Skeleton from '@/app/components/Skeleton';

export default ({ params }) => {
  const [book, setBook] = useState<BookReview>({} as BookReview);

  const fetchBook = async () => {
    const res = await fetch(`/api/book/${params.id}`);
    if (res) {
      const { data } = await res.json();
      setBook(data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Book book={book}></Book>
    </>
  );
};
