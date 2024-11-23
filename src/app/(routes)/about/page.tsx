import { AboutHero } from "@/components/about/about-hero";
import { OurApproach } from "@/components/about/our-approach";
import { OurBelieve } from "@/components/about/our-believe";
import { Statistics } from "@/components/about/statistics";
import { StudentExamples } from "@/components/about/student-examples";
import React from "react";

const About = () => {
  return (
    <div className="w-full my-6">
      <AboutHero />
      <StudentExamples />
      <OurBelieve />
      <OurApproach />
      <Statistics />
    </div>
  );
};

export default About;
