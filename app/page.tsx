import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Contact/>
      <Clients />
    </main>
  );
}
