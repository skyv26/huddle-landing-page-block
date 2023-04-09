import SubscriptionButton from "./SubscriptionButton";
import IllustrationMockUp from "../assets/illustration-mockups.svg";

const HeroSection = () => {
  return (
    <section className="px-4 pt-32 pb-9 flex flex-col gap-14 bg-[#EDFBFF] hero-section bg-no-repeat bg-contain bg-[top_right_0.1rem] items-center min-[390px]:h-screen min-[390px]:px-6 min-[390px]:gap-16 md:flex-row md:pt-40 md:h-auto md:gap-12 lg:px-12 xl:h-screen min-[1440px]:h-auto min-[1440px]:gap-16 min-[1440px]:px-20 min-[1440px]:pb-16">
      <div className="flex flex-col items-center text-center gap-4 w-auto pr-0 min-[390px]:gap-8 md:text-left md:items-start md:gap-8 min-[1440px]:w-[1120px] min-[1440px]:gap-[27px] min-[1440px]:pt-3">
        <h1 className="px-8 font-poppins font-semibold text-[#00252E] text-xl min-[375px]:text-2xl md:px-0 md:text-xl md:pr-8 lg:text-3xl xl:text-[40px] xl:leading-normal min-[1366px]:text-5xl min-[1366px]:leading-[60px] min-[1440px]:text-[40px] min-[1440px]:tracking-[-0.2px]">
          Build The Community Your Fans Will Love
        </h1>
        <p className="px-3 font-normal font-open-sans text-[#00252E] text-sm min-[390px]:text-base md:px-0 md:text-sm lg:text-base xl:text-lg">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <SubscriptionButton className="font-open-sans font-bold text-white bg-[#FF52C1] text-xs max-w-max px-14 py-2.5 rounded-full shadow-[2px_3px_6px_1px_rgba(255,82,193,0.17)] hover:bg-[#FF9ADB] hover:cursor-pointer min-[390px]:text-sm min-[390px]:px-20 min-[390px]:py-4 md:text-xs md:px-12 md:py-2.5 lg:text-sm lg:px-16 lg:py-3 xl:text-base xl:px-20 xl:py-5 min-[1440px]:text-sm min-[1440px]:px-[70px] min-[1440px]:py-[18px]">
          Get Started For Free
        </SubscriptionButton>
      </div>
      <figure className="w-auto md:w-[100rem] min-[1440px]:w-[1520px]">
        <img src={IllustrationMockUp} />
      </figure>
    </section>
  );
};

export default HeroSection;
