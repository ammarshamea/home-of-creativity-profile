"use client";

import { Nav } from "@/components/chrome";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { ThankYou } from "@/components/sections/ThankYou";
import { Welcome } from "@/components/sections/Welcome";
import {
  Ads,
  Applications,
  Booths,
  CompanyProfile,
  Events,
  Finance,
  Gifts,
  Identity,
  MotionWork,
  Outdoor,
  Packaging,
  Photography,
  Print,
  Social,
  Web,
} from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Philosophy />
        <Services />
        <Events />
        <Booths />
        <Identity />
        <CompanyProfile />
        <Print />
        <Applications />
        <Packaging />
        <Social />
        <MotionWork />
        <Photography />
        <Ads />
        <Gifts />
        <Outdoor />
        <Web />
        <Finance />
        <Contact />
        <ThankYou />
      </main>
    </>
  );
}
