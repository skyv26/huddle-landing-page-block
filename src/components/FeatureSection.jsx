import { useContext } from "react";
import Store from "../store/store";
import { SHUFFLE } from "../store/ContextProvider";
import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
  const { state, dispatch } = useContext(Store);

  const shuffleHandler = () => {
    const shuffledList = [...state.data];
    dispatch({ type: SHUFFLE, payload: shuffledList })
  };

  return (
    <section className="px-4 pt-14 pb-9 min-[390px]:px-6 md:pt-24 md:pb-9 lg:px-12 min-[1440px]:px-[102px] min-[1440px]:pt-[160px] min-[1440px]:pb-11">
      <ul className="flex flex-col gap-10 items-center min-[1440px]:w-full min-[1440px]:gap-[42px]">
        {state.data.map((each, index) => (
          <li
            key={index}
            className={`px-[26px] pt-[60px] pb-[33px] bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl min-[1440px]:w-full ${index === 1 ? 'min-[1440px]:pt-[75px] min-[1440px]:pl-[126px] min-[1440px]:pr-8 min-[1440px]:pb-[70px]' : index === 2 ? 'min-[1440px]:pt-16 min-[1440px]:pl-[120px] min-[1440px]:pr-8 min-[1440px]:pb-[47px]' : 'min-[1440px]:pt-12 min-[1440px]:pl-[120px] min-[1440px]:pr-8 min-[1440px]:pb-[47px]'}`}
            onClick={shuffleHandler}
          >
            <article className={`flex flex-col items-center gap-14 ${(index+1) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:pl-14 xl:pl-20 min-[1440px]:justify-between min-[1440px]:pl-0`}>
            <figure className={`px-4 min-[390px]:px-6 min-[1440px]:px-0 min-[1440px]:w-[25.75rem]`}>
                <img src={each.image} />
              </figure>
              <div className={`flex flex-col gap-4 text-center md:text-left min-[1440px]:w-[490px] min-[1440px]:pt-3.5 ${index === 1&&'min-[1440px]:w-[500px]'}`}>
                <h2 className={`text-[#00252E] text-[20px] font-poppins font-semibold min-[390px]:text-2xl md:text-xl lg:text-2xl min-[1440px]:text-3xl ${index === 1 ? 'min-[1440px]:tracking-[-1px]' : 'min-[1440px]:tracking-[-0.7px]'}`}>
                  {each.title}
                </h2>
                <p className={`text-[#808E9A] text-[14px] font-open-sans font-normal min-[390px]:text-base md:text-sm lg:text-base min-[1440px]:text-lg`}>
                  {each.description}
                </p>
              </div>
            </article>
          </li>
        ))}
        <li className="flex flex-col items-center gap-[24px] text-center px-3 py-10 bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl w-full translate-y-[70%] min-[390px]:px-4 min-[390px]:py-12 md:max-w-max md:px-20 md:z-10 lg:gap-10 xl:px-28 xl:py-16 xl:translate-y-[60%] min-[1440px]:px-[132px] min-[1440px]:pt-[67px] min-[1440px]:pb-[52px] min-[1440px]:translate-y-[50%]">
          <h2 className="font-poppins font-semibold text-[16px] text-[#00252E] min-[390px]:text-xl md:text-lg lg:text-[30px] xl:text-4xl min-[1440px]:text-[31.75px]">
            Ready To Build Your Community?
          </h2>
          <SubscriptionButton className="text-white bg-[#FF52C1] font-open-sans font-bold text-xs max-w-max px-14 py-2.5 rounded-full shadow-[0px_6px_13px_0px_rgba(0,37,46,0.22)] hover:bg-[#FF9ADB] hover:cursor-pointer min-[390px]:text-sm lg:text-base lg:px-16 lg:py-4 xl:text-lg xl:px-20 xl:py-6 min-[1440px]:py-[26px] min-[1440px]:px-24 min-[1440px]:text-xl">
            Get Started For Free
          </SubscriptionButton>
        </li>
      </ul>
    </section>
  );
};

export default FeatureSection;
