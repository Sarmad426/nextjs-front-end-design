import { HowProgramsWork } from "@/components/programs/how-programs-work";
import { ProgramOverview } from "@/components/programs/program-overview";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { StudentGuides } from "@/components/programs/student-guides";
import { GetSurroundedByTalentedPeople } from "@/components/programs/surrounded-by-talented-people";
import { WhatOurStudentsDo } from "@/components/programs/what-our-students-do";
import React from "react";

const Programs = () => {
  return (
    <div className="min-h-screen w-full">
      <ProgramsHero />
      <ProgramOverview />
      <HowProgramsWork />
      <WhatOurStudentsDo />
      <StudentGuides />
      <GetSurroundedByTalentedPeople />
    </div>
  );
};

export default Programs;
