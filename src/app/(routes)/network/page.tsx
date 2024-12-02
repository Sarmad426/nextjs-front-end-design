import React from "react";
import { NetworkHero } from "@/components/network/network-hero";
import { PersonalizedMentoring } from "@/components/network/personalized-mentoring";

const NetworkPage = () => {
  return (
    <main className="w-full my-6">
      <NetworkHero />
      <PersonalizedMentoring />
    </main>
  );
};

export default NetworkPage;
