export default ({ title = "Summarize books and talk to books" }) => {
  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">
          {title}
        </h1>
        <h2 className="text-xl">
          Chat with books with GPT-3.5 or GPT-4
        </h2>
      </div>
    </>
  );
};
