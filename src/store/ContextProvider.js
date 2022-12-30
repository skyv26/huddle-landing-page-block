import PropTypes from 'prop-types';
import { useReducer } from 'react';
import Store from './store';
import GrowTogether from '../assets/illustration-grow-together.svg';
import FlowingTogether from '../assets/illustration-flowing-conversation.svg';
import YourUser from '../assets/illustration-your-users.svg';

// const FETCH_DATA = 'fetch';

const initialState = [
    {
        title: 'Grow Together',
        description: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
        image: GrowTogether,
    },
    {
        title: 'Flowing Conversations',
        description: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.',
        image: FlowingTogether,
    },
    {
        title: 'Your Users',
        description: 'It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.',
        image: YourUser,
    }
];

const storeReducer = (state, action) => {
    if(action.type === 'NOT') return true;
    return state;
};

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>
            { children }
        </Store.Provider>
    );
};


ContextProvider.defaultProps = {
    children: [],
};


ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;
