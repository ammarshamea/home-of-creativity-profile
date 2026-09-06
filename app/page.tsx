"use client";

import { Footer, Nav } from "@/components/chrome";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Finance } from "@/components/sections/Finance";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Projects />
        <Finance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
