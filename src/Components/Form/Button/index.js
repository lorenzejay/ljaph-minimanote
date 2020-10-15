import React from "react";
import "./styles.scss";

function Button({ children, handleClick, type, bgColor }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      style={{ backgroundColor: bgColor ? bgColor : "#333333" }}
    >
      {children}
    </button>
  );
}

export default Button;
