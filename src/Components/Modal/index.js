import React, { useState, useContext } from "react";
import "./styles.scss";
import { DarkTheme } from "../../../src/Context/theme";

function Modal({ children, openModal, modalTitle, closeModal }) {
  const [modalActive, setModalActive] = useState(false);
  const darkTheme = useContext(DarkTheme);
  const { darkThemeActive } = darkTheme;

  return (
    <div>
      <span onClick={() => setModalActive(true)}>{openModal}</span>
      <div
        className="modal"
        style={{
          display: modalActive ? "block" : "none",
        }}
      >
        <div
          className="modal-contents"
          style={{
            backgroundColor: darkThemeActive ? "#333333" : "#E1E8ED",
            color: darkThemeActive ? "white" : "black",
          }}
        >
          <span onClick={() => setModalActive(false)}>X</span>
          <h2 style={{ borderBottomColor: darkThemeActive ? "#E1E8ED" : "#333333" }}>
            {modalTitle}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
