import React from "react";

import { HowProgramsWork } from "@/components/programs/how-programs-work";
import { LifeChanging } from "@/components/programs/life-changing";
import { ProgramOverview } from "@/components/programs/program-overview";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { StudentGuides } from "@/components/programs/student-guides";
import { GetSurroundedByTalentedPeople } from "@/components/programs/surrounded-by-talented-people";
import { WhatOurStudentsDo } from "@/components/programs/what-our-students-do";
import { FAQ } from "@/components/programs/faq";
import { ApplicationProcess } from "@/components/programs/application-process";
import { CareerOpportunities } from "@/components/programs/career-opportunities";

const Programs = () => {
  return (
    <main className="min-h-screen w-full">
      <ProgramsHero />
      <ProgramOverview />
      <HowProgramsWork />
      <WhatOurStudentsDo />
      <StudentGuides />
      <GetSurroundedByTalentedPeople />
      <LifeChanging />
      <FAQ />
      <ApplicationProcess />
      <CareerOpportunities />
    </main>
  );
};

export default Programs;
