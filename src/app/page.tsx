import Hero from "@/components/hero";
import MeetProfessor from "@/components/meet-professor";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <MeetProfessor />
    </main>
  );
}
