import PropTypes from "prop-types";
function CustomButton({ count, incrementCount }) {
  return <button onClick={incrementCount}>count is {count}</button>;
}
CustomButton.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
};
export default CustomButton;
