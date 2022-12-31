import { useContext } from "react";
import Store from "../store/store";

import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
    const { state } = useContext(Store);
    console.log(state);
    return (
        <section>
            <ul>
                <li>
                    <h2>Ready To Build Your Community?</h2>
                    <SubscriptionButton>Get Started For Free</SubscriptionButton>
                </li>
            </ul>
        </section>
    );
};

export default FeatureSection;
