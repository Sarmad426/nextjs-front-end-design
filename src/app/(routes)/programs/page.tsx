import React from "react";

import { HowProgramsWork } from "@/components/programs/how-programs-work";
import { LifeChanging } from "@/components/programs/life-changing";
import { ProgramOverview } from "@/components/programs/program-overview";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { StudentGuides } from "@/components/programs/student-guides";
import { GetSurroundedByTalentedPeople } from "@/components/programs/surrounded-by-talented-people";
import { WhatOurStudentsDo } from "@/components/programs/what-our-students-do";

const Programs = () => {
  return (
    <div className="min-h-screen w-full">
      <ProgramsHero />
      <ProgramOverview />
      <HowProgramsWork />
      <WhatOurStudentsDo />
      <StudentGuides />
      <GetSurroundedByTalentedPeople />
      <LifeChanging />
    </div>
  );
};

export default Programs;
