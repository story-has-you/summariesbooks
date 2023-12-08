export default () => {
  return (
    <>
      <div className="flex flex-col max-w-full lg:w-[1200px] mx-auto px-4">
        <div className="grid card rounded-box">
          <p className="text-2xl font-bold text-left mb-3">How does it work?</p>
          <p className="text-base text-left">
            summariesbooks.com uses GPT-3.5 or GPT-4 to generate a book summary
            and mind map so you can quickly discover great books to read online
            or buy at Amazon
          </p>
          <p className="text-base text-left mt-5">
            About Chat With Book, After logging in, you can chat with the book function, and you can use the book as a robot to ask him any questions about the book.
            The default model is gpt-3.5-turbo-1106
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <p className="text-2xl font-bold text-left mb-3">Legal Notice</p>
          <div className="text-base text-left">
            <div className="pb-3 text-left">
              The book summaries provided on summariesbooks.com are generated
              using OpenAI technology and are intended for educational,
              informational, and private use purposes only.
            </div>
            <div className="pb-3 text-left font-bold">
              The summary cannot replace the original work
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
