import React from "react";
import axios from "axios";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Contexts from "./managers/contextManager";

import Routing from "./router";
import "/style/Index.scss";

/*
axios.interceptors.request.use(
  (request: any) => {
    const token = "abcdefgh"; //cookies.get("token");
    if (token) {
      const httpMethods = ["post", "put", "get", "delete"];
      httpMethods.forEach(
        (method) => (request.headers[method]["X-Auth-Token"] = token)
      );
    }
    return request;
  },
  (error) => Promise.reject(error)
);
*/
render(
  <Contexts>
    <React.StrictMode>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.StrictMode>
  </Contexts>,
  document.getElementById("root")
);
