import React from "react";
import Header from "../../Components/Header";
import "./styles.scss";
function SignInLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default SignInLayout;
