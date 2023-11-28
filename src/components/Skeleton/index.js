export default ({ count }) => {
  return (
    <>
      <section className="px-6 max-w-6xl mx-auto md:px-0">
        <div className="w-full text-xs py-5 relative">
          <div className="w-full text-xs py-5 relative">
            <div className="w-full grid grid-cols-2 md:grid-cols-5">
              {[...Array(count).keys()].map((i) => {
                return (
                  <div key={i} className="flex flex-col gap-4 w-52 mb-5">
                    <div className="skeleton h-32"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
