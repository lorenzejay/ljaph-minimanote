import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

//layout
import MainLayout from "../src/Layouts/mainLayout/index";

//components
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import SignInLayout from "./Layouts/signinorupLayout";

import { checkUserSession } from "./Redux/User/user.Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//context darkTheme
import { DarkThemeProvider } from "./Context/theme";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function App() {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [darkThemeActive, setDarkThemeActive] = useState(false);
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <DarkThemeProvider value={{ darkThemeActive, setDarkThemeActive }}>
        <Switch>
          <Route exact path="/" render={() => <MainLayout></MainLayout>} />

          <Route
            path="/login"
            render={() =>
              !currentUser ? (
                <SignInLayout>
                  <SignIn />
                </SignInLayout>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/register"
            render={() =>
              !currentUser ? (
                <SignInLayout>
                  <SignUp />
                </SignInLayout>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
