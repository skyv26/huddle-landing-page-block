import PropTypes from "prop-types";
import { useReducer } from "react";
import Store from "./store";
import GrowTogether from "../assets/illustration-grow-together.svg";
import FlowingTogether from "../assets/illustration-flowing-conversation.svg";
import YourUser from "../assets/illustration-your-users.svg";

export const SHUFFLE = 'shuffle';
export const SWITCH_THEME = 'switch_mode';

const initialState = {
  data: [
    {
      title: "Grow Together",
      description:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      image: GrowTogether,
      alt: 'Let\'s grow together' 
    },
    {
      title: "Flowing Conversations",
      description:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      image: FlowingTogether,
      alt: 'Let\'s flow together' 
    },
    {
      title: "Your Users",
      description:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      image: YourUser,
      alt: 'Know your user' 

    },
  ],
  mode: false,
};

const shuffleList = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const storeReducer = (state, action) => {
  switch(action.type) {
    case SHUFFLE:
      return { data: shuffleList(action.payload), mode: state.mode };
    case SWITCH_THEME:
      return { ...action.payload };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

ContextProvider.defaultProps = {
  children: [],
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
