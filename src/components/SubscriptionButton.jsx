import PropTypes from 'prop-types';

const SubscriptionButton = (props) => <a href="#">{props.children}</a>;

SubscriptionButton.defaultProps = {
    children: [],
};


SubscriptionButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SubscriptionButton;
