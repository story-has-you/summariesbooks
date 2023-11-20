export default ({ book }) => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-row">
            <div className="w-1/3 p-4">
              <img src={book.cover_url} alt="Book Cover" className="mb-4" />
              <h2 className="text-2xl font-bold mb-4">{book.book_name}</h2>
              <p className="font-semibold">{book.book_author}</p>
              <p className="font-semibold">{book.publish_time}</p>
            </div>

            <div className="w-2/3 p-4">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <p className="font-sans text-lg">{book.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
