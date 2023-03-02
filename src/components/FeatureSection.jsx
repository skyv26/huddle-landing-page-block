import { useContext } from "react";
import Store from "../store/store";

import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
    const { state } = useContext(Store);
    return (
        <section className="px-4 pt-14 pb-9">
            <ul className="flex flex-col gap-10 items-center">
                { state.map((each, index) => (
                    <li key={index} className="px-[26px] pt-[60px] pb-[33px] bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl">
                        <article className="flex flex-col items-center gap-14">
                            <figure className="px-4">
                                <img src={each.image} />
                            </figure>
                            <div className="flex flex-col gap-4 text-center">
                                <h2 className="text-[#00252E] text-[20px] font-poppins font-semibold">{ each.title }</h2>
                                <p className="text-[#808E9A] text-[14px] font-open-sans font-normal">{ each.description }</p>
                            </div>
                        </article>
                    </li>
                )) }
                <li className="flex flex-col items-center gap-[24px] text-center px-3 py-10 bg-white shadow-[0_0_14px_0px_rgba(0,0,0,0.07)] rounded-2xl max-w-max">
                    <h2 className="font-poppins font-semibold text-[16px] text-[#00252E]">Ready To Build Your Community?</h2>
                    <SubscriptionButton className="text-white bg-[#FF52C1] text-xs max-w-max px-14 py-2.5 rounded-3xl">Get Started For Free</SubscriptionButton>
                </li>
            </ul>
        </section>
    );
};

export default FeatureSection;
