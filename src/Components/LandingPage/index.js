import React from "react";
import "./styles.scss";

function LandingPage({ children }) {
  return (
    <div className="landingPage">
      <h1>📝 Welcome To Minimanote</h1>
      <p>A Minimalistic Todo and Note taking Appliation.</p>
      {children}
    </div>
  );
}

export default LandingPage;
