import React from "react";

const Input = ({
  classStyle,
  inputType,
  setOnChange,
  placeholder,
  row,
  value,
}) => {
  return (
    <>
      {inputType === "textarea" ? (
        <textarea
          className={classStyle}
          onChange={setOnChange}
          rows={row}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          className={classStyle}
          type="text"
          placeholder={placeholder}
          onChange={setOnChange}
          value={value}
        />
      )}
    </>
  );
};

export default Input;
