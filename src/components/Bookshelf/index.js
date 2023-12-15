"use client"

import Link from "next/link"
import './Bookshelf.css'
import { useEffect, useState } from "react";
import { request } from "@/utils/api";

export default ({ initialBooks }) => {
  const [books, setBooks] = useState(initialBooks || []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreBooks = async () => {
    setIsLoading(true);
    const { data } = await request("/api/books", { params: { current: page + 1, limit: 15 } });
    setBooks([...books, ...data]);
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = async () => {
      if (isLoading) return;

      const threshold = 300;
      const position = window.innerHeight + document.documentElement.scrollTop;
      const height = document.documentElement.offsetHeight;

      if (position + threshold >= height) {
        await fetchMoreBooks();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]); // 依赖于 isLoading 状态
  return (
    <>
      <section className="px-6 max-w-6xl mx-auto md:px-0">
        <div className="w-full text-xs py-5 relative">
          <div className="w-full grid grid-cols-2 md:grid-cols-5">
            {books.map(book => {
              return (
                <Link
                  key={`${book.id}`}
                  href={`/${book.book_name.replace(/ /g, '-')}/${book.id}`}
                  target="_blank"
                  title={`View summary: ${book.book_name}`}
                >
                  <div className="book shadow-2xl">
                    <div
                      style={{ backgroundImage: `url(${book.cover_url})` }}
                      className={`book-cover book-inner bg-rose-400 w-36 h-52`}
                    >
                      {/* <h2 className="inline-flex flex-wrap justify-start pr-1.5">
                      <span className="text-sm book-author w-full">
                        {book.book_author}
                      </span>
                      <span className="text-base font-bold break-all">
                        {book.book_name}
                      </span>
                    </h2> */}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
