import React from "react";
import PropTypes from "prop-types";
import { BsCheck2 } from "react-icons/bs";

const CheckBox = ({ onChange, checked, label }) => {
  const inputRef = React.useRef(null);
  const OnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={OnChange}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <BsCheck2 />
      </span>
      {label}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
