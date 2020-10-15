import React from "react";
import "./styles.scss";
function AuthWrapper({ headline, children }) {
  return (
    <div className="authWrapper">
      <div className="wrap">
        <h2>{headline}</h2>
        {children}
      </div>
    </div>
  );
}

export default AuthWrapper;
