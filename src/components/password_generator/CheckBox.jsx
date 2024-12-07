import PropTypes from "prop-types";

function CheckBox({ title, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <label className="text-gray-400" htmlFor={`${title.toLowerCase()}box`}>
        {title}
      </label>
      <input
        className="accent-gray-400"
        type="checkbox"
        id={`${title.toLowerCase()}box`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

CheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
