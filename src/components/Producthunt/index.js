"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    const handler = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return <section className="flex justify-center">
    <Link
      href="https://www.producthunt.com/products/summariesbooks/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-summariesbooks"
      target="_blank"
    >
      <img
        src={`https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=561442&theme=${isDarkMode ? "dark" : "neutral"}`}
        alt="summariesbooks - Free&#0032;AI&#0045;Powered&#0032;Book&#0032;Summaries | Product Hunt"
        style={{ width: 250, height: 54 }}
        width="250"
        height="54"
      />
    </Link>

  </section>
}

