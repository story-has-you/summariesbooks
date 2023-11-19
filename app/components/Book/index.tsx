export default ({ book }) => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex justify-start gap-8 sm:gap-20 lg:flex-row">
            <img src={book.cover_url} className="inline-block w-60 h-96" />

            <div className="flex flex-col">
              <p className="text-2xl text-center mb-5">{book.book_name}</p>
              <p className="font-medium">{book.summary}</p>
            </div>
          </div>
          <p className="font-bold">John Robert</p>
          <p className="text-sm text-[#647084]">Senior Webflow Developer</p>
        </div>
      </section>
    </>
  );
};
