import { AboutHero } from "@/components/about/about-hero";
import { StudentExamples } from "@/components/about/student-examples";
import React from "react";

const About = () => {
  return (
    <div className="w-full my-6">
      <AboutHero />
      <StudentExamples />
    </div>
  );
};

export default About;
