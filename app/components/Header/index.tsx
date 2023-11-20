export default () => {
  return (
    <>
      <div className="text-center p-8">
        <h2 className="text-6xl font-bold mb-4">Book Summarize</h2>
        <h2 className="text-4xl font-bold mb-2">
          Free AI-Powered Book Summaries
        </h2>
        <div className="flex justify-center items-center">
          <input
            className="form-input mt-1 block w-1/2 p-2 border"
            placeholder="Enter a book title..."
          />
          <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 ml-2">
            Summarize
          </button>
        </div>
      </div>
    </>
  );
};
