import Image from "next/image";

import PersonalizedMentoringImg from "@/assets/network-page/network-2.webp";

export const PersonalizedMentoring = () => {
  return (
    <section className="w-[95%] mx-auto flex flex-col-reverse lg:flex-row gap-8 my-12">
      <div className="lg:w-[40%] w-full">
        <Image
          src={PersonalizedMentoringImg}
          alt="Personalized Mentoring"
          className="lg:min-w-[540px] lg:max-w-[540px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-full w-full gap-5 mx-1.5">
        <h4 className="font-onest font-light text-[28px] leading-8 lg:font-extralight lg:text-[40px] lg:leading-[48px]">
          Receive personalized
          <span className="text-primaryColor"> 1 on 1 mentoring</span> from
          <span className="text-primaryColor"> experts</span> for over
          <span className="text-primaryColor"> 500 hours</span>{" "}
        </h4>
        <p className="font-onest font-light text-base leading-5 lg:text-[22px] lg:leading-8">
          They will sit down with you and guide you through every detail of your
          business, including making introductions to the perfect new customers
          and investors, so you can grow your startup right away.
        </p>
      </div>
    </section>
  );
};
