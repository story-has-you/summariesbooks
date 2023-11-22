import { BookSummary } from '@/app/types/BookSummary';
import Link from 'next/link';

interface Props {
  book: BookSummary;
  loading: Boolean;
}

export default ({ book, loading }: Props) => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-row">
            <div className="w-1/4 p-4">
              {loading ? (
                <div className="skeleton w-auto h-[500px]"></div>
              ) : (
                <img
                  src={`${book.cover_url}`}
                  alt="Book Cover"
                  className="mb-4"
                />
              )}
              <h2 className="text-2xl font-bold">{book.book_name}</h2>
              <p className="font-semibold">Author: {book.book_author}</p>
              <p className="font-semibold">Published: {book.publish_date}</p>
              {book.amazon_url ? (
                <Link href={`${book.amazon_url}`} target="_blank">
                  <button className="btn btn-wide btn-neutral mt-10 btn-lg">
                    See on Amazon
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>

            <div className="w-3/4 p-4">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              {loading ? (
                <div className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-4 w-56"></div>
                  {[...Array(15).keys()].map((i) => {
                    return <div className="skeleton h-4 w-full"></div>;
                  })}
                </div>
              ) : (
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <p className="font-sans text-lg">{book.summary}</p>
                </div>
              )}

              <p>
                Not happy with the result?
                <Link
                  href="https://docs.google.com/forms/d/1o60-PoKLnxcnwK5TgXnigrvfzyZje4rDq3QwhgLQsZU"
                  target="_blank"
                  className="italic underline"
                >
                  Let us know what you think.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
