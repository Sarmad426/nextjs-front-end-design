import React from "react";
import { NetworkHero } from "@/components/network/network-hero";
import { PersonalizedMentoring } from "@/components/network/personalized-mentoring";
import { NetworkForLife } from "@/components/network/network-for-life";

const NetworkPage = () => {
  return (
    <main className="w-full my-6">
      <NetworkHero />
      <PersonalizedMentoring />
      <NetworkForLife />
    </main>
  );
};

export default NetworkPage;
