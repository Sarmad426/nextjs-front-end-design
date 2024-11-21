"use client";

import Hero from "@/components/hero";
import LifeAtGenoa from "@/components/life-at-genoa";
import MeetProfessor from "@/components/meet-professor";
import OfferedPrograms from "@/components/offered-programs";
import OurNetwork from "@/components/our-network";
import { Sponsors } from "@/components/sponsors";
import { WhyGenoas } from "@/components/why-genoas";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6 w-full h-full ">
      <Hero />
      <Sponsors />
      <MeetProfessor />
      <OfferedPrograms />
      <WhyGenoas />
      <OurNetwork />
      <LifeAtGenoa />
    </main>
  );
}
