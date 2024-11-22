"use client";

import { Hero } from "@/components/home/hero";
import { LifeAtGenoa } from "@/components/home/life-at-genoa";
import { MeetProfessor } from "@/components/home/meet-professor";
import { OfferedPrograms } from "@/components/home/offered-programs";
import { OurNetwork } from "@/components/home/our-network";
import { OurStudents } from "@/components/home/our-students";
import { Sponsors } from "@/components/home/sponsors";
import { StartJourney } from "@/components/home/start-journey";
import { WhyGenoas } from "@/components/home/why-genoas";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6 w-full h-full">
      <Hero />
      <Sponsors />
      <MeetProfessor />
      <OfferedPrograms />
      <WhyGenoas />
      <OurNetwork />
      <LifeAtGenoa />
      <OurStudents />
      <StartJourney />
    </main>
  );
}
