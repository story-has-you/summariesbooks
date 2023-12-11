import Link from "next/link";
import Tab from "../Tab";

export default ({ book, assistant }) => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 w-full">
              <img
                src={book.cover_url}
                alt="Book Cover"
                className="mb-4 w-full h-auto"
              />
              <h2 className="text-2xl font-bold">{book.book_name}</h2>
              <div className="font-semibold">Author: {book.book_author}</div>
              <div className="font-semibold">Published: {book.publish_date}</div>
              <div className="font-semibold">
                Category:{" "}
                {book.category ? (
                  book.category.map((item) => {
                    return (
                      <div
                        className="badge badge-primary badge-outline"
                        key={item}
                      >
                        {item}
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              {book.gutenberg_url ? (
                <Link href={book.gutenberg_url} target="_blank">
                  <button className="btn btn-neutral mt-10 btn-base w-full h-auto">
                    Read online (web)
                  </button>
                </Link>
              ) : (
                <></>
              )}

              {book.amazon_url ? (
                <Link
                  target="_blank"
                  href={`${book.amazon_url}?&_encoding=UTF8&tag=summariesbo03-20&linkCode=ur2&linkId=290522e8063b00ffb83aaebcd4ea42ce&camp=1789&creative=9325`}
                >
                  <button className="btn btn-neutral mt-5 btn-base w-full h-auto">
                    See Amazon
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>

            <div className="md:w-3/4 p-4 w-full">
              <Tab
                book={book}
                assistant={assistant}
              ></Tab>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
