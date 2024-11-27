import { HowProgramsWork } from "@/components/programs/how-programs-work";
import { ProgramOverview } from "@/components/programs/program-overview";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { WhatOurStudentsDo } from "@/components/programs/what-our-students-do";
import React from "react";

const Programs = () => {
  return (
    <div className="min-h-screen w-full">
      <ProgramsHero />
      <ProgramOverview />
      <HowProgramsWork />
      <WhatOurStudentsDo />
    </div>
  );
};

export default Programs;
