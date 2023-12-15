"use client"

import Link from "next/link"
import './Bookshelf.css'
import { useState } from "react";

export default ({ initialBooks, count }) => {
  const [books, setBooks] = useState(initialBooks || []);
  const [page, setPage] = useState(1);

  const chunkArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  };

  const bookshelf = (books) => {
    const chunks = chunkArray(books, 15);
    return chunks.map((chunk, index) => {
      return (
        <div key={index + 1} id={index + 1} className="carousel-item w-full grid grid-cols-2 md:grid-cols-5">
          {
            chunk.map((book) => {
              return (
                <div key={book.id}>
                  <Link
                    href={`/${book.book_name.replace(/ /g, '-')}/${book.id}`}
                    target="_blank"
                    title={`View summary: ${book.book_name}`}
                  >
                    <div className="book shadow-2xl">
                      <div
                        style={{ backgroundImage: `url(${book.cover_url})` }}
                        className={`book-cover book-inner bg-rose-400 w-36 h-52`}
                      >
                      </div>
                    </div>
                  </Link>
                </div >
              )
            })
          }
          <div className="absolute flex justify-between transform -translate-y-1/2 -left-10 -right-10 top-1/2">
            <a href={`#${page}`} className="btn btn-circle" onClick={() => { if (page > 1) setPage(page - 1) }}>❮</a>
            <a href={`#${page}`} className="btn btn-circle" onClick={() => { if (Math.floor(count / 15) + 1 > page) setPage(page + 1) }}>❯</a>
          </div>
        </div>
      )
    })
  }


  return (
    <>
      <section className="px-6 max-w-6xl mx-auto md:px-0">
        <div className="w-full text-xs py-5 relative">
          <div className="carousel w-full">
            {bookshelf(books)}
          </div>
        </div>
      </section>
    </>
  )
}
