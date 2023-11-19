export default ({ book }) => {
  return (
    <>
      <section className="rounded-sm px-6 pb-12 max-w-6xl mx-auto md:px-12 bg-stone-200">
        <header className="overflow-hidden pt-6 pb-6 md:pt-12">
          <div className="pt-4 md:pt-6">
            <h1
              id="article-title"
              className="heti--serif text-[2rem] font-bold leading-snug mb-4 md:mb-6 md:text-[2.6rem]"
            >
              <span>{book.book_name}</span>
            </h1>
            <div className="grid grid-cols-9 gap-2 text-xs">
              <div className="col-span-3 flex flex-col justify-center md:flex-row">
                <span
                  title="View all posts by ROYIANS"
                  rel="author"
                  className="font-bold"
                >
                  {book.book_author}
                </span>
                <span className="hidden px-2 md:block">/</span>
                <span>{book.publish_date}</span>
              </div>
            </div>
          </div>
          <article className="heti text-lg post-content mt-10 prose dark:prose-invert post-content heti--serif ">
            {book.summary}
          </article>
        </header>
      </section>
    </>
  );
};
