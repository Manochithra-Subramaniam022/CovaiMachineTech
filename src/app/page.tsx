import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
