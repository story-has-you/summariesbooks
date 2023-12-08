import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Producthunt from "@/components/Producthunt";

export default function BookLayout({ children }) {
  return (
    <section>
      <Header />
      <Brand />
      <Producthunt />
      {children}
      <Footer />
    </section>
  );
}
