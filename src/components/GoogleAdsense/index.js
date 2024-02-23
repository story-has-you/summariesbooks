import Script from "next/script";

export default () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7443304090881953"
      crossorigin="anonymous"
      strategy="lazyOnload"
    ></Script>
  );
};
