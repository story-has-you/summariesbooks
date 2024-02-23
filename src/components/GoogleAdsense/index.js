import Script from "next/script";

export default () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_CA_PUB}`}
      crossorigin="anonymous"
      strategy="lazyOnload"
    ></Script>
  );
};
