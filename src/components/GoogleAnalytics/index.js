import Script from "next/script";

export default () => {
  return (
    <>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6K5KLVSXMR" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6K5KLVSXMR');
        `}
        </Script>
      </div>
    </>
  );
};
