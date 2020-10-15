import React from "react";
import "./styles.scss";

function SidebarInput({ placeholder, handleChange, type, label, ...additonalData }) {
  if (label) {
    return (
      <div>
        <label for={label}>{label}</label>
        <input
          className="sidebar-input"
          placeholder={placeholder}
          onChange={handleChange}
          type={type}
          {...additonalData}
        />
      </div>
    );
  }
  return (
    <input
      className="sidebar-input"
      placeholder={placeholder}
      onChange={handleChange}
      type={type}
      {...additonalData}
    />
  );
}

export default SidebarInput;
