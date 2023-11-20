import { BookReview } from '@/app/types/BookReview';
import Link from 'next/link';

interface Props {
  book: BookReview;
}

export default ({ book }: Props) => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-row">
            <div className="w-1/4 p-4">
              <img
                src={`${book.cover_url}`}
                alt="Book Cover"
                className="mb-4"
              />
              <h2 className="text-2xl font-bold">{book.book_name}</h2>
              <p className="font-semibold">Author: {book.book_author}</p>
              <p className="font-semibold">Published: {book.publish_date}</p>
              <Link href={`${book.amazon_url}`} target="_blank">
                <button className="btn btn-wide btn-neutral mt-10 btn-lg">
                  See on Amazon
                </button>
              </Link>
            </div>

            <div className="w-3/4 p-4">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <div className="flex justify-center px-4 py-16 bg-base-200">
                <p className="font-sans text-lg">{book.summary}</p>
              </div>

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
