import { Inter } from "next/font/google";
import "./globals.css";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "summariesbooks.com",
  description: "uses GPT-3.5 or GPT-4 to generate a book summary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`flex flex-col ${inter.className}`}>
        <Header />
        <Brand />
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
