import { PropTypes } from "prop-types";

function RoundedButton({ title, color, onClick }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full shadow-lg  text-white mr-2"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

RoundedButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RoundedButton;
