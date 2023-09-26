import PropTypes from "prop-types";

const SubscriptionButton = ({ children, className }) => (
  <a href="http://devaakash.com/" target="_blank" rel="noreferrer noopener" className={className}>
    {children}
  </a>
);

SubscriptionButton.defaultProps = {
  children: [],
  className: "",
};

SubscriptionButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SubscriptionButton;
