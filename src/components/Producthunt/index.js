import Link from "next/link";

export default () => {
  return (
    <>
      <section className="flex justify-center">
        <Link
          href="https://www.producthunt.com/posts/summariesbooks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-summariesbooks"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=426573&theme=light"
            alt="summariesbooks - Free&#0032;AI&#0045;Powered&#0032;Book&#0032;Summaries | Product Hunt"
            style={{ width: 250, height: 54 }}
            width="250"
            height="54"
          />
        </Link>
      </section>
    </>
  );
};
