import React from "react";
import "./styles.scss";
function FormInput({ placeholder, handleChange, type }) {
  return <input placeholder={placeholder} type={type} onChange={handleChange} />;
}

export default FormInput;
