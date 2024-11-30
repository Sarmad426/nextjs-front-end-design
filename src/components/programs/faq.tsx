import { faqData } from "@/data/data";
import Link from "next/link";
import { Collapsible } from "../custom/collapsible";

export const FAQ = () => {
  return (
    <section className="w-[95%] mx-auto my-28 mt-12 md:mt-20">
      <div className="flex flex-col items-start gap-[8px] w-full my-8">
        <h2 className="leading-[24px] md:leading-[32px] relative z-20 text-[#43AA13] text-[20px] md:text-[24px] lg:min-w-max">
          <span className="hidden md:flex">Frequently asked questions</span>
          <span className="md:hidden">Graduation and alumni tools to grow</span>
        </h2>
        <div className="h-[1px] w-full relative bg-[#BCD4C7]">
          <div className="absolute top-0 h-[1px] left-0 bg-[#193E2C] z-10 w-[200px]"></div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row gap-y-8 gap-x-40 w-full">
        <div className="lg:w-1/2">
          <h5 className="text-lg leading-[22px] my-8 lg:text-2xl">
            Have questions about GenoaES? Check out our FAQ section for answers
            to commonly asked questions.
          </h5>
          <p className="my-6 text-lg leading-[22px] lg:text-2xl">
            Still need assistance? Reach out to us on{" "}
            <Link href="/" className="underline font-bold text-primaryColor">
              Calendly
            </Link>{" "}
            for further support.
          </p>
        </div>
        <div className="w-full p-2 flex flex-col gap-y-10">
          {faqData.map((faq, index) => {
            return (
              <Collapsible
                key={index}
                question={faq.question}
                InnerText={faq.answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
