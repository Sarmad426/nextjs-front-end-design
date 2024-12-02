import Image from "next/image";
import WorkshopsIcon from "@/assets/network-page/workshops-card-icon.svg";
import Mentors from "@/assets/network-page/mentors.webp";

export const NetworkForLife = () => {
  return (
    <section className="w-[95%] mx-auto my-12 md:mt-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/3 p-[16px] relative group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:h-full">
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#43AA13] transition-colors duration-300 ease-in-out" />
          </div>
          <div className="flex mb-[8px] min-h-[76px] items-start mt-[20px]">
            <Image src={WorkshopsIcon} alt="Workshops Icon" className="mr-7" />
            <h2 className="text-[#202020] text-[20px] md:text-[24px] leading-[24px] md:leading-[32px] font-[400] mb-[8px] group-hover:text-[#FCFAF2] z-20">
              Topic Specific workshops and 1:1s
            </h2>
          </div>
          <p className="text-[18px] leading-[24px] font-[300] mt-[24px] md:mt-[100px] group-hover:text-white z-20">
            Class workshops are followed by hands on 30-minute 1:1 sessions,
            ensuring that the learning is directly and specifically applied to
            your venture.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/3 p-[16px] relative group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:h-full">
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#43AA13] transition-colors duration-300 ease-in-out" />
          </div>
          <div className="flex mb-[8px] min-h-[76px] items-start mt-[20px]">
            <Image src={WorkshopsIcon} alt="Workshops Icon" className="mr-7" />
            <h2 className="text-[#202020] text-[20px] md:text-[24px] leading-[24px] md:leading-[32px] font-[400] mb-[8px] group-hover:text-[#FCFAF2] z-20">
              Personalized weekly 1:1 sessions
            </h2>
          </div>
          <p className="text-[18px] leading-[24px] font-[300] mt-[24px] md:mt-[100px] group-hover:text-white z-20">
            You’ll be paired with an industry expert in your field who, through
            weekly 30-minute 1:1 sessions, will ensure you improve each week of
            the program.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/3 p-[16px] relative group overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:h-full">
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#43AA13] transition-colors duration-300 ease-in-out" />
          </div>
          <div className="flex mb-[8px] min-h-[76px] items-start mt-[20px]">
            <Image src={WorkshopsIcon} alt="Workshops Icon" className="mr-7" />
            <h2 className="text-[#202020] text-[20px] md:text-[24px] leading-[24px] md:leading-[32px] font-[400] mb-[8px] group-hover:text-[#FCFAF2] z-20">
              Hands on support 24/7
            </h2>
          </div>
          <p className="text-[18px] leading-[24px] font-[300] mt-[24px] md:mt-[100px] group-hover:text-white z-20">
            Mentors will remain available at any time via email or phone, so any
            problems can be resolved quickly and your startup’s progress won’t
            be interrupted.
          </p>
        </div>
      </div>
      <div className="my-12 lg:my-20 flex flex-col-reverse lg:flex-row gap-y-5 gap-x-2">
        <div className="flex flex-col gap-5 items-start justify-center min-h-full p-2">
          <h4 className="font-onest font-light text-[28px] leading-8 lg:font-extralight lg:text-[40px] lg:leading-[48px]">
            Genoa ES network is for life
          </h4>
          <p className="w-full ml-[18%] font-onest font-light text-base lg:text-[22px] lg:leading-8 lg:w-3/4 lg:ml-0">
            After the program ends, 85% of our mentors continue to provide
            monthly advice to graduates.
          </p>
        </div>
        <div>
          <Image
            src={Mentors}
            alt="Network for life"
            className="w-[328px] h-[250px] lg:min-w-[581px] lg:max-w-[581px] lg:h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};
