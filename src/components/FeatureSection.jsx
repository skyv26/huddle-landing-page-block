import { useContext } from "react";
import Store from "../store/store";
import { SHUFFLE } from "../store/ContextProvider";
import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
  const { state, dispatch } = useContext(Store);

  const shuffleHandler = () => {
    const shuffledList = [...state]
    dispatch({ type: SHUFFLE, payload: shuffledList })
  }

  return (
    <section className="px-4 pt-14 pb-9 min-[390px]:px-6 md:pt-24 md:pb-9">
      <ul className="flex flex-col gap-10 items-center">
        {state.map((each, index) => (
          <li
            key={index}
            className="px-[26px] pt-[60px] pb-[33px] bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl"
            onClick={shuffleHandler}
          >
            <article className={`flex flex-col items-center gap-14 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              <figure className="px-4 min-[390px]:px-6">
                <img src={each.image} />
              </figure>
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-[#00252E] text-[20px] font-poppins font-semibold min-[390px]:text-2xl md:text-xl">
                  {each.title}
                </h2>
                <p className="text-[#808E9A] text-[14px] font-open-sans font-normal min-[390px]:text-base md:text-sm">
                  {each.description}
                </p>
              </div>
            </article>
          </li>
        ))}
        <li className="flex flex-col items-center gap-[24px] text-center px-3 py-10 bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl w-full translate-y-[70%] min-[390px]:px-4 min-[390px]:py-12 md:max-w-max md:px-20 md:z-10">
          <h2 className="font-poppins font-semibold text-[16px] text-[#00252E] min-[390px]:text-xl md:text-lg">
            Ready To Build Your Community?
          </h2>
          <SubscriptionButton className="text-white bg-[#FF52C1] font-open-sans font-bold text-xs max-w-max px-14 py-2.5 rounded-3xl hover:bg-[#FF9ADB] hover:cursor-pointer min-[390px]:text-md">
            Get Started For Free
          </SubscriptionButton>
        </li>
      </ul>
    </section>
  );
};

export default FeatureSection;
