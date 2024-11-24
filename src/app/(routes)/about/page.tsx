import React from "react";
import { AboutHero } from "@/components/about/about-hero";
import { AcademicBody } from "@/components/about/academic-body";
import { InfiniteScrollText } from "@/components/about/infinite-scroll-text";
import { OurApproach } from "@/components/about/our-approach";
import { OurBelieve } from "@/components/about/our-believe";
import { Statistics } from "@/components/about/statistics";
import { StudentExamples } from "@/components/about/student-examples";
import { IndustryExperts } from "@/components/about/industry-experts";
import { WhatMediaSays } from "@/components/about/what-media-says";
import { StartJourney } from "@/components/home/start-journey";

const About = () => {
  return (
    <div className="w-full my-6">
      <AboutHero />
      <StudentExamples />
      <OurBelieve />
      <OurApproach />
      <Statistics />
      <InfiniteScrollText />
      <AcademicBody />
      <IndustryExperts />
      <WhatMediaSays />
      <StartJourney />
    </div>
  );
};

export default About;
