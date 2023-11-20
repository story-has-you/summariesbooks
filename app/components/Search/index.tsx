'use client';

import { BookReview } from '@/app/types/BookReview';
import { useState, useRef, SetStateAction, Dispatch } from 'react';

interface Props {
  setBooks: Dispatch<SetStateAction<BookReview[]>>;
}

export default ({ setBooks }: Props) => {
  const [keywords, setKeywords] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      if (e.keyCode !== 229) {
        e.preventDefault();
        handleSearch();
      }
    }
  };

  const requestBody = {
    keywords: keywords,
  };

  const handleSearch = async () => {
    const res = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    const books = await res.json();
    console.log(books);

    setBooks(books);
  };

  return (
    <>
      <div className="text-center p-8">
        <div className="flex justify-center items-center">
          <input
            ref={inputRef}
            value={keywords}
            className="form-input mt-1 block w-1/2 p-2 border"
            placeholder="Enter a book title..."
            onKeyDown={handleEnter}
            onChange={handleInputChange}
          />
          <button
            className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 ml-2"
            onClick={handleSearch}
          >
            Summarize
          </button>
        </div>
      </div>
    </>
  );
};
