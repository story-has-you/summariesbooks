import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Summarize books and talk to books",
  description: "uses GPTs to chat with book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className} bg-orange-50`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
