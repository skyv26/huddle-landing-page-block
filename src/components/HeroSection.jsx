import SubscriptionButton from "./SubscriptionButton";
import IllustrationMockUp from "../assets/illustration-mockups.svg";

const HeroSection = () => {
  return (
    <section className="px-4 pt-32 pb-9 flex flex-col gap-14 bg-[#EDFBFF] hero-section bg-no-repeat bg-contain bg-[top_right_0.1rem] items-center min-[390px]:h-screen min-[390px]:px-6 min-[390px]:gap-16 md:flex-row md:pt-40 md:h-auto md:gap-12">
      <div className="flex flex-col items-center text-center gap-4 min-[390px]:gap-8 md:text-left md:items-start md:gap-8">
        <h1 className="px-9 font-semibold text-[#00252E] text-xl min-[390px]:text-3xl md:px-0 md:text-xl md:pr-8">
          Build The Community Your Fans Will Love
        </h1>
        <p className="px-3 font-normal font-open-sans text-[#00252E] text-sm min-[390px]:text-base md:px-0 md:text-sm">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <SubscriptionButton className="font-open-sans font-bold text-white bg-[#FF52C1] text-xs max-w-max px-14 py-2.5 rounded-3xl shadow-[2px_3px_6px_1px_rgba(255,82,193,0.17)] hover:bg-[#FF9ADB] hover:cursor-pointer min-[390px]:text-sm min-[390px]:px-20 min-[390px]:py-4 md:text-xs md:px-12 md:py-2.5">
          Get Started For Free
        </SubscriptionButton>
      </div>
      <figure className="md:w-[100rem]">
        <img src={IllustrationMockUp} />
      </figure>
    </section>
  );
};

export default HeroSection;
