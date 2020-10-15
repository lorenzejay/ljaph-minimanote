import React, { useContext } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../Redux/User/user.Actions";
import { CgDarkMode } from "react-icons/cg";
import { DarkTheme } from "./../../Context/theme";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Header(props) {
  const darkTheme = useContext(DarkTheme);
  const { darkThemeActive, setDarkThemeActive } = darkTheme;

  const signout = () => {
    dispatch(signOutUserStart());
  };

  const changeTheme = () => {
    setDarkThemeActive(!darkThemeActive);
  };

  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        Minimanote
      </Link>
      {currentUser && (
        <ul className="nav-links">
          <li>
            <CgDarkMode size="20" style={{ cursor: "pointer" }} onClick={changeTheme} />
          </li>
          <li>
            <span onClick={() => signout()}>Logout</span>
          </li>
        </ul>
      )}
      {!currentUser && (
        <ul className="nav-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
