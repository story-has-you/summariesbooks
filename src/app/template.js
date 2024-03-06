import GoogleAdsense from "@/components/GoogleAdsense";

export default function Template({ children }) {
  return (
    <>
      <div>{children}</div>
      <GoogleAdsense />
    </>
  );
}
