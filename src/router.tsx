import React, { useContext } from "react";
import { UserAuthContext } from "./managers/contexts";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainTemplate from "./components/MainTemplate";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Regulamin from "./components/Regulamin";
import Topic from "./components/Topic";
import TopicList from "./components/TopicList";

const Routing = () => {
  const [userAuth, setUserAuth] = useContext(UserAuthContext);
  return (
    <>
      {(() => {
        switch (userAuth.loggedIn) {
          case "load":
            return (
              <>
                <h1>Ładowanie Strony</h1>
              </>
            );
          case "true":
            return (
              <>
                <MainTemplate>
                  <Switch>
                    <Route exact path="/login">
                      <Redirect to="/" />
                    </Route>
                    <Route exact path="/register">
                      <Redirect to="/" />
                    </Route>
                    <Route exact path="/user/:id" component={Profile} />
                    <Route exact path="/regulamin" component={Regulamin} />
                    <Route exact path="/topic/:id" component={Topic} />
                    <Route
                      exact
                      path="/topicList/:categoryId"
                      component={TopicList}
                    />
                    <Route exact path="/" component={Home} />
                    <Route path="/" />
                  </Switch>
                </MainTemplate>
              </>
            );
          case "false":
            return (
              <>
                <MainTemplate>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/user/:id" component={Profile} />
                    <Route exact path="/regulamin" component={Regulamin} />
                    <Route exact path="/topic/:id" component={Topic} />
                    <Route
                      exact
                      path="/topicList/:categoryId"
                      component={TopicList}
                    />
                  </Switch>
                </MainTemplate>
              </>
            );
        }
      })()}
    </>
  );
};

export default Routing;
