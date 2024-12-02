import React from "react";
import { NetworkHero } from "@/components/network/network-hero";
import { PersonalizedMentoring } from "@/components/network/personalized-mentoring";
import { NetworkForLife } from "@/components/network/network-for-life";
import { WhatToExpectFromMentors } from "@/components/network/what-to-expect-from-mentors";

const NetworkPage = () => {
  return (
    <main className="w-full my-6">
      <NetworkHero />
      <PersonalizedMentoring />
      <NetworkForLife />
      <WhatToExpectFromMentors />
    </main>
  );
};

export default NetworkPage;
