"use client";

import Hero from "@/components/hero";
import MeetProfessor from "@/components/meet-professor";
import OfferedPrograms from "@/components/offered-programs";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6 w-full h-full ">
      <Hero />
      <Sponsors />
      <MeetProfessor />
      <OfferedPrograms />
    </main>
  );
}
