import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BookLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
