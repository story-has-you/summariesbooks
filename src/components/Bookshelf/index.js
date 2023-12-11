import Link from "next/link"
import './Bookshelf.css'

export default ({ books }) => {
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
