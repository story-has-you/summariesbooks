import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Summarize books and talk to books",
  description: "uses GPTs to chat with book",
  alternates: {
    canonical: "https://summariesbooks.com",
  },
  other: {
    "google-adsense-account": process.env.NEXT_PUBLIC_CA_PUB,
  },
  keywords: ["books", "summary book", "chat with book", "summariesbooks"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>{children}</body>
      <GoogleAnalytics />
    </html>
  );
}
