import React, { useState, useEffect } from "react";
import AuthWrapper from "../Form/AuthWrapper";
import Button from "../Form/Button";
import FormInput from "../Form/FormInput";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { signUpUserStart } from "./../../Redux/User/user.Actions";
import { useSelector, useDispatch } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userError: user.userError,
});

function SignUp(props) {
  const history = useHistory();
  const { currentUser, userError } = useSelector(mapState);
  const dispatch = useDispatch();
  const [displayName, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser]);

  useEffect(() => {
    if (userError !== "") {
      setErr(userError);
    }
  }, [userError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUserStart({ displayName, email, password, confirmPassword }));
  };
  return (
    <AuthWrapper headline={"Sign Up"}>
      {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}
      <div className="signUp">
        <form onSubmit={handleSubmit}>
          <FormInput
            placeholder={"Username"}
            type={"text"}
            handleChange={(e) => setDisplayname(e.target.value)}
          />
          <FormInput
            placeholder={"Email"}
            type={"email"}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            placeholder={"Password"}
            type={"password"}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            placeholder={"Confirm Password"}
            type={"password"}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignUp;
