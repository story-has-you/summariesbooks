import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "summariesbooks.com",
  description: "uses GPT-3.5 or GPT-4 to generate a book summary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`flex flex-col ${inter.className}`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
