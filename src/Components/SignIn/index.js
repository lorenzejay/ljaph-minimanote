import React, { useState, useEffect } from "react";
// import { signInWithGoogle } from "../../firebase/utils";
import AuthWrapper from "../Form/AuthWrapper";
import Button from "../Form/Button";
import FormInput from "../Form/FormInput";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart, userError, signInWithGoogleStart } from "../../Redux/User/user.Actions";
import { useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userError: user.userError,
});

function SignIn(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser, userError } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push("/");
    }
  }, [currentUser]);

  console.log(userError);
  useEffect(() => {
    if (userError !== undefined || userError === "") {
      setError(userError);
    }
  }, [userError]);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const signInWithGoogle = () => {
    dispatch(signInWithGoogleStart());
  };

  return (
    <AuthWrapper headline={"Login"}>
      <div>
        <div className="signIn">
          {error && <p style={{ color: "red", fontSize: 12 }}>{error}</p>}
          <form onSubmit={handleSubmit}>
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
            <Button>Login</Button>
          </form>
          <Button handleClick={signInWithGoogle}>Login with Google</Button>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
