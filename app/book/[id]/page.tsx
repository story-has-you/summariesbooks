'use client';
import Book from '../../components/Book';

import { useEffect, useState } from 'react';

export default ({ params }) => {
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    const res = await fetch(`/api/bookDetail/${params.id}`, {
      cache: 'force-cache',
    });
    if (res) {
      const bookDetail = await res.json();
      setBook(bookDetail);
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
