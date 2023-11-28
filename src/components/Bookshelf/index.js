import Link from "next/link"

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
                  href={`/book/${book.id}`}
                  target="_blank"
                  title={`View summary: ${book.book_name}`}
                >
                  <div className="book">
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

      <style jsx>{`
        .book {
          width: 144px;
          height: 208px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 48px;
          position: relative;
          cursor: pointer;
          box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 0 3px 3px 0;
          perspective: 1000px;
        }

        .book-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .book-inner,
        .book-pages::before,
        .book-pages::after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform-origin: left center;
          transition: transform 0.2s ease-in;
        }

        .book-cover,
        .book-pages {
          transform-style: preserve-3d;
        }

        .book-cover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 10px;
          bottom: 0;
          width: 3px;
          background: rgba(0, 0, 0, 0.06);
          box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
        }

        .book-cover {
          border-radius: 0 3px 3px 0;
          width: calc(100% + 2px);
          transform: translateX(-2px);
          height: 100%;
          position: relative;
        }

        .book-cover h2 {
          position: absolute;
          top: 0;
          left: 20px;
          padding-top: 15px;
          color: #fff;
        }

        .book-cover h2 span {
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
        }

        .book-pages {
          transform: scale(0.95, 0.9);
          perspective: 2000px;
        }
        .book-pages::before,
        .book-pages::after {
          background-color: #fff;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.075) 97%,
            transparent
          );
          box-shadow: 1px 4px 5px 0 rgba(0, 0, 0, 0.05);
          content: "";
        }

        .book-cover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .book-back {
          border-radius: 0 3px 3px 0;
        }

        .book-back,
        .book-cover {
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .book-back,
        .book-pages {
          right: 0;
          bottom: 0;
        }

        .book-pages::after {
          transition-delay: 0.12s;
        }
        .book-pages::before {
          transition-delay: 0.105s;
        }

        .book-pages + .book-pages::after {
          transition-delay: 0.09s;
        }
        .book-pages + .book-pages::before {
          transition-delay: 0.075s;
        }

        .book-pages + .book-pages + .book-pages::after {
          transition-delay: 0.06s;
        }
        .book-pages + .book-pages + .book-pages::before {
          transition-delay: 0.045s;
        }

        .book-pages + .book-pages + .book-pages + .book-pages::after {
          transition-delay: 0.03s;
        }
        .book-pages + .book-pages + .book-pages + .book-pages::before {
          transition-delay: 0.015s;
        }

        .book-author {
          zoom: 0.5;
        }

        .book:hover .book-back,
        .book:hover .book-cover::before {
          box-shadow: inset -2px 0 1px rgba(0, 0, 0, 0.075);
        }
        .book:hover .book-cover {
          transform: rotateY(-40deg) translateZ(10px);
          transform-timing-function: ease-out;
          transition-delay: 0s;
        }
        .book:hover .book-pages::after {
          transform: rotateY(-12deg);
        }
        .book:hover .book-pages::before {
          transform: rotateY(-8deg);
        }
        .book:hover .book-pages + .book-pages::after {
          transform: rotateY(-20deg);
        }
        .book:hover .book-pages + .book-pages::before {
          transform: rotateY(-16deg);
        }
        .book:hover .book-pages + .book-pages + .book-pages::after {
          transform: rotateY(-28deg);
        }
        .book:hover .book-pages + .book-pages + .book-pages::before {
          transform: rotateY(-24deg);
        }
        .book:hover
          .book-pages
          + .book-pages
          + .book-pages
          + .book-pages::after {
          transform: rotateY(-36deg);
        }
        .book:hover
          .book-pages
          + .book-pages
          + .book-pages
          + .book-pages::before {
          transform: rotateY(-32deg);
        }
      `}</style>
    </>
  )
}
