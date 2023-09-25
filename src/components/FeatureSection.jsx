import { useContext } from "react";
import Store from "../store/store";

import SubscriptionButton from "./SubscriptionButton";

const FeatureSection = () => {
    const { state } = useContext(Store);
    return (
        <section>
            <ul>
                { state.map((each, index) => (
                    <li key={index}>
                        <article>
                            <figure>
                                <img src={each.image} />
                            </figure>
                            <div>
                                <h2>{ each.title }</h2>
                                <p>{ each.description }</p>
                            </div>
                        </article>
                    </li>
                )) }
                <li>
                    <h2>Ready To Build Your Community?</h2>
                    <SubscriptionButton>Get Started For Free</SubscriptionButton>
                </li>
            </ul>
        </section>
    );
};

export default FeatureSection;
