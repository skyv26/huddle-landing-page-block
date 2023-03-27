import SubscriptionButton from "./SubscriptionButton";
import IllustrationMockUp from "../assets/illustration-mockups.svg";

const HeroSection = () => {
  return (
    <section className="px-4 flex flex-col gap-14 bg-[#EDFBFF] hero-section bg-no-repeat bg-contain bg-[top_right_0.1rem]">
      <div className="flex flex-col pt-32 items-center text-center gap-4">
        <h1 className="px-9 font-semibold text-[#00252E] text-xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="px-3 font-normal font-open-sans text-[#00252E] text-sm">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <SubscriptionButton className="font-open-sans font-bold text-white bg-[#FF52C1] text-xs max-w-max px-14 py-2.5 rounded-3xl shadow-[2px_3px_6px_1px_rgba(255,82,193,0.17)] hover:bg-[#FF9ADB] hover:cursor-pointer">
          Get Started For Free
        </SubscriptionButton>
      </div>
      <figure className="pb-9">
        <img src={IllustrationMockUp} />
      </figure>
    </section>
  );
};

export default HeroSection;
