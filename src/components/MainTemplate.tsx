import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuthContext } from "../managers/contexts";
import axios from "axios";

import "/style/MainTemplate.scss";

const MainTemplate = (props: any) => {
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  const history = useHistory();
  return (
    <div className="mainTemplate">
      <nav>
        <div className="topNavLogo">
          <Link to="/">
            <img
              src="../assets/pictures/logo.png"
              className="logo"
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="topNavOptions">
          <Link to="/">
            <button className="topNavOption">Strona główna</button>
          </Link>
          <Link to="/regulamin">
            <button className="topNavOption">Regulamin</button>
          </Link>
        </div>
        <div className="topNavActions">
          {(() => {
            if (userAuth.loggedIn === "false") {
              return (
                <Link to="/login">
                  <button className="loginButton">Zaloguj się</button>
                </Link>
              );
            } else if (userAuth.loggedIn === "true") {
              return (
                <button
                  className="loginButton"
                  onClick={(e) => {
                    e.preventDefault();
                    //dispatch(logout());
                    //setUserAuth
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    setUserAuth({
                      loggedIn: "false"
                    });
                    axios.defaults.headers.post["Authorization"] = undefined;
                    history.push("/");
                  }}
                >
                  Wyloguj się
                </button>
              );
            }
          })()}
        </div>
      </nav>
      <main>{props.children}</main>
      <footer>
        <p>
          Wszelkie prawa zastrzeżone © <span>GRZYBIARZE.org</span>
        </p>
      </footer>
    </div>
  );
};

export default MainTemplate;
