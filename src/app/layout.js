import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAdsense from "@/components/GoogleAdsense";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        {children}
        <GoogleAnalytics />
        <SpeedInsights />
        <GoogleAdsense />
      </body>
    </html>
  );
}
