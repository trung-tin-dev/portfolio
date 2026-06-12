import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SelectedWork from "@/components/selected-work";
import TechMarquee from "@/components/tech-marquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechMarquee />
      <SelectedWork />
      <Contact />
      <Footer />
    </main>
  );
}
