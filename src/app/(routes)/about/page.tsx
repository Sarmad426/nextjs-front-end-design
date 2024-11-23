import { AboutHero } from "@/components/about/about-hero";
import { OurBelieve } from "@/components/about/our-believe";
import { StudentExamples } from "@/components/about/student-examples";
import React from "react";

const About = () => {
  return (
    <div className="w-full my-6">
      <AboutHero />
      <StudentExamples />
      <OurBelieve />
    </div>
  );
};

export default About;
