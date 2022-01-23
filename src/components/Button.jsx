import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";

  const size = props.size ? "btn-" + props.size : "btn-sm";

  const style = props.style ? "btn-" + props.style : "";

  return (
    <button
      className={`btn ${bg} ${size} ${style} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span style={{ whiteSpace: "nowrap" }} className="btn__text">
        {props.children}
      </span>
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
