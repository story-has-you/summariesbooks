export default () => {
  return (
    <>
      <div className="flex flex-col w-[1500px]">
        <div className="grid card rounded-box">
          <p className="text-2xl font-bold text-left mb-3">How does it work?</p>
          <p className="text-base text-left">
            booksummary.ai uses OpenAI's GPT-3 technology to generate book
            summaries. GPT-3 is a powerful language model that can generate
            human-like text. It is trained on a large corpus of text from the
            internet and is capable of generating text on a wide variety of
            topics.
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid card rounded-box">
          <p className="text-2xl font-bold text-left mb-3">Legal Notice</p>
          <div className="text-base text-left">
            <div className="pb-3 text-left">
              The book summaries provided on booksummary.ai are generated using
              OpenAI technology and are intended for educational, informational,
              and private use purposes only. We respect the intellectual
              property rights of authors and publishers and strive to adhere to
              copyright laws.
            </div>
            <div className="pb-3 text-left">
              Summaries are not a substitute for reading the original works and
              we encourage users to support authors by purchasing their books
              from authorized sellers.
            </div>
            <div className="pb-3 text-left">
              If you are a copyright holder or an authorized representative and
              believe that any content on our website infringes upon your
              copyrights, please contact us at hello@booksummary.ai with the
              necessary information to support your claim. Upon receiving a
              valid notice, we will promptly remove the identified content and
              take necessary action.
            </div>
            <div>
              By using booksummary.ai, you agree to comply with all applicable
              laws and regulations for private use, and acknowledge that you
              will not hold booksummary.ai, its owners, or affiliates liable for
              any claims or disputes arising from the use of our services.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
