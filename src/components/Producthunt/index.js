export default ({ isDarkMode }) => {
  return (
    <section className="flex justify-center">
      <a
        href="https://www.producthunt.com/products/summariesbooks?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-summariesbooks"
        target="_blank"
      >
        <img
          src={`https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=561442&size=small&theme=${
            isDarkMode ? "dark" : ""
          }`}
          alt="summariesbooks - Free&#0032;AI&#0045;Powered&#0032;Book&#0032;Summaries | Product Hunt"
          style={{ width: 86, height: 32 }}
        />
      </a>
    </section>
  );
};
