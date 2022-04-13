import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterRequest from "../ajax/RegisterRequest";

import "/style/Register.scss";

function contains(c: string, reg: RegExp) {
  for (let char of c) if (char.match(reg)) return true;
  return false;
}

const Register = () => {
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: ""
  });
  const [passwordVal, setPasswordVal] = useState("");
  const history = useHistory();
  return (
    <>
      <div className="registerContainer">
        <div
          className="register"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");
            let form = new FormData(e.target),
              data = [];

            if (form.get("password") !== form.get("passwordRepeat")) {
              setError("Hasła nie są takie same!");
              return;
            }

            for (let input of form) {
              data.push(input[1]);
            }

            let resp = await RegisterRequest(
              data[0],
              data[1],
              data[2]
            ); /*await fetch(
              "https://pt-rest-api.herokuapp.com/users/",
              requestOptions
            );*/

            if (resp) {
              alert("Dodano nowego użytkownika!");
              history.push("/login");
            } else {
              //if (resp.status === 400) {
              setError("Rejestracja nie powiodła się.");
              //}
            }
            /*fetch("https://pt-rest-api.herokuapp.com/topic/1").then(
              (response) => {
                console.log(response.json());
              }
            );*/

            //console.log("Dane logowania", data);
            //Wyślij dane na serwer...
          }}
        >
          <h1>Zarejestruj się</h1>
          <form>
            <input
              className="username"
              type="text"
              name="username"
              onFocus={(e) => {
                let err = { ...inputErrors };
                err.username = "";
                setInputErrors(err);
              }}
              onBlur={(e) => {
                let err = { ...inputErrors };
                err.username = undefined;
                let u = e.target.value.trim();
                if (!u.match(/^([0-9a-zA-Z]+)$/))
                  err.username = "Nazwa użytkownika zawiera niedozwolone znaki";
                if (u.length > 100)
                  err.username = "Nazwa użytkownika jest za długa";
                if (u === "")
                  err.username = "Nazwa użytkownika nie może być pusta";
                setInputErrors(err);
              }}
              placeholder="Nazwa użytkownika"
            />
            <div className="inputError">{inputErrors.username}</div>
            <input
              className="email"
              type="email"
              name="email"
              onFocus={(e) => {
                let err = { ...inputErrors };
                err.email = "";
                setInputErrors(err);
              }}
              onBlur={(e) => {
                let err = { ...inputErrors };
                err.email = undefined;
                let u = e.target.value.trim();
                if (
                  !u.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
                )
                  err.email = "Email ma niepoprawną składnię";
                if (u === "") err.email = "Email nie może być pusty";
                setInputErrors(err);
              }}
              placeholder="E-mail"
            />
            <div className="inputError">{inputErrors.email}</div>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Hasło"
              onFocus={(e) => {
                let err = { ...inputErrors };
                err.password = "";
                setInputErrors(err);
              }}
              onBlur={(e) => {
                let err = { ...inputErrors };
                err.password = undefined;
                let u = e.target.value;
                if (
                  !contains(u, /[a-z]/) ||
                  !contains(u, /[A-Z]/) ||
                  !contains(u, /[0-9]/)
                )
                  err.password =
                    "Twoje hasło powinno zawierać: \nPrzynajmniej jedną małą literę \nPrzynajmniej jedną wielką literę\nPrzynajmniej jedną cyfrę";
                if (u.length < 8)
                  err.password = "Hasło powinno mieć przynajmniej 8 znaków";
                if (u === "") err.password = "Hasło nie może być puste";
                if (!err.password) setPasswordVal(u);
                setInputErrors(err);
              }}
            />
            <div className="inputError">{inputErrors.password}</div>
            <input
              className="passwordRepeat"
              type="password"
              name="passwordRepeat"
              placeholder="Powtórz hasło"
              onFocus={(e) => {
                let err = { ...inputErrors };
                err.passwordRepeat = "";
                setInputErrors(err);
              }}
              onBlur={(e) => {
                let err = { ...inputErrors };
                err.passwordRepeat = undefined;
                if (e.target.value.trim() === "") err.passwordRepeat = "";
                if (e.target.value !== passwordVal)
                  err.passwordRepeat = "Podane hasła nie są jednakowe";
                setInputErrors(err);
              }}
            />
            <div className="inputError">{inputErrors.passwordRepeat}</div>
            <div className="error">{error}</div>
            <button
              disabled={(() => {
                for (let err of Object.values(inputErrors)) {
                  if (typeof err !== "undefined") return true;
                }
                return false;
              })()}
            >
              Zatwierdź
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
