import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuthContext } from "../managers/contexts";
import LoginRequest from "../ajax/LoginRequest";
import axios from "axios";

import "/style/Login.scss";

const Login = () => {
  const history = useHistory();
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  const [error, setError] = useState("");
  return (
    <>
      <div className="login_container">
        <div className="login_art"></div>
        <div
          className="login"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");
            let form = new FormData(e.target),
              data = [];
            for (let input of form) data.push(input[1]);

            let resp = await LoginRequest(data[0], data[1]);

            if (resp) {
              setUserAuth({
                loggedIn: "true",
                username: data[0],
                token: resp["token"]
              });
              console.log(resp);
              //axios.defaults.headers.post["token"] = "Token " + resp["token"];
              //axios.defaults.headers.post["WWW-Authenticate"] =
              //  "Token " + resp["token"];
              //axios.defaults.headers.post["HTTP_AUTHORIZATION"] =
              //  "Token " + resp["token"];
              axios.defaults.headers.post["Authorization"] =
                "Token " + resp["token"];

              localStorage.setItem("token", resp["token"]);
              localStorage.setItem("username", data[0]);

              history.push("/");
            } else {
              setError("Logowanie nie powiodło się");
            }
            //localStorage.setItem("token", "jakistoken123213");
            //Wyślij dane na serwer...
            //dispatch(login(data[0], data[1]));
            //setError("Error na próbę");
          }}
        >
          <h1>Zaloguj się</h1>
          <form>
            <input
              className="username"
              type="text"
              name="username"
              placeholder="Nazwa użytkownika"
            />
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Hasło"
            />
            <div className="error">{error}</div>
            <button>Zatwierdź</button>
          </form>
          <div className="noAccount">
            Nie masz jeszcze konta? <Link to="/register">Zarejestruj się</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
