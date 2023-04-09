import { useContext } from "react";
import Store from "../store/store";
import { SHUFFLE } from "../store/ContextProvider";
import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
  const { state, dispatch } = useContext(Store);

  const shuffleHandler = () => {
    const shuffledList = [...state];
    dispatch({ type: SHUFFLE, payload: shuffledList })
  };

  return (
    // min-[1440px]:px-[100px] min-[1440px]:pt-40 min-[1440px]:pb-0
    <section className="px-4 pt-14 pb-9 min-[390px]:px-6 md:pt-24 md:pb-9 lg:px-12">
      <ul className="flex flex-col gap-10 items-center">
        {state.map((each, index) => (
          <li
            key={index}
            // min-[1440px]:pr-8 min-[1440px]:py-[54px] ${(index+1) % 2 === 0 ? 'min-[1440px]:pt-[70px]' : 'min-[1440px]:pt-[62px] min-[1440px]:pb-[50px]'} ${ index === 2 ? 'min-[1440px]:pt-[75px]' : ''}
            className={`px-[26px] pt-[60px] pb-[33px] bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl`}
            onClick={shuffleHandler}
          >
            {/* min-[1440px]:justify-between min-[1440px]:pl-0 */}
            <article className={`flex flex-col items-center gap-14 ${(index+1) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:pl-14 xl:pl-20`}>
            {/* min-[1440px]:px-0 ${(index+1) % 2 !== 0 ? 'min-[1440px]:w-[25.5rem]' : 'min-[1440px]:w-[32.25rem] min-[1440px]:pl-[100px]'}  ${ index === 2 ? 'min-[1440px]:w-[28.25rem]' : ''} */}
            <figure className={`px-4 min-[390px]:px-6`}>
                <img src={each.image} />
              </figure>
              {/* min-[1440px]:pl-[100px] ${(index+1) % 2 === 0 ? 'min-[1440px]:w-[37.25rem]' : 'min-[1440px]:w-[50%]'} ${ index === 2 ? 'min-[1440px]:w-[60%]' : ''} */}
              <div className={`flex flex-col gap-4 text-center md:text-left`}>
              {/* min-[1440px]:text-[28px] */}
                <h2 className="text-[#00252E] text-[20px] font-poppins font-semibold min-[390px]:text-2xl md:text-xl lg:text-2xl">
                  {each.title}
                </h2>
                {/* min-[1440px]:text-lg */}
                <p className={`text-[#808E9A] text-[14px] font-open-sans font-normal min-[390px]:text-base md:text-sm lg:text-base`}>
                  {each.description}
                </p>
              </div>
            </article>
          </li>
        ))}
        {/* min-[1440px]:translate-y-[45%] min-[1440px]:px-[132px] min-[1440px]:py-[60px] */}
        <li className="flex flex-col items-center gap-[24px] text-center px-3 py-10 bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl w-full translate-y-[70%] min-[390px]:px-4 min-[390px]:py-12 md:max-w-max md:px-20 md:z-10 lg:gap-10 xl:px-28 xl:py-16 xl:translate-y-[60%]">
        {/* min-[1440px]:text-[32px] */}
          <h2 className="font-poppins font-semibold text-[16px] text-[#00252E] min-[390px]:text-xl md:text-lg lg:text-[30px] xl:text-4xl">
            Ready To Build Your Community?
          </h2>
          {/* min-[1440px]:text-[20px] min-[1440px]:px-[100px] min-[1440px]:py-[25px] */}
          <SubscriptionButton className="text-white bg-[#FF52C1] font-open-sans font-bold text-xs max-w-max px-14 py-2.5 rounded-full hover:bg-[#FF9ADB] hover:cursor-pointer min-[390px]:text-sm lg:text-base lg:px-16 lg:py-4 xl:text-lg xl:px-20 xl:py-6">
            Get Started For Free
          </SubscriptionButton>
        </li>
      </ul>
    </section>
  );
};

export default FeatureSection;
