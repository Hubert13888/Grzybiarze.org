import { useState, useEffect } from "react";
import axios from "axios";
import {
  UserAuthContext,
  TopicListContext,
  TopicContext,
  CategoryListContext,
  Last10PostsContext
} from "./contexts";
import CategoryListRequest from "../ajax/CategoryListRequest";
import TopicRequest from "../ajax/TopicRequest";
import Last10PostsRequest from "../ajax/Last10PostsRequest";

const test = false;

const checkAuthorization = async () => {
  let token = "abcd";
  try {
    let response = await axios({
      method: "GET",
      url: "http://localhost:1234/checkAuthorization"
    });
    if (response.data) {
      return response.data;
    } else {
      return {
        loggedIn: "false"
      };
    }
  } catch (err) {
    //alert("Oh nie, wystąpił błąd!");
    return {
      loggedIn: "false"
    };
  }
};

const UserAuthController = ({ children }) => {
  const [state, setState] = useState({ loggedIn: "load" });
  useEffect(() => {
    if (state.loggedIn === "load") {
      if (test) {
        setState({
          loggedIn: "false"
        });
      } else {
        let token = localStorage.getItem("token");
        if (token) {
          setState({
            loggedIn: "true",
            token,
            username: localStorage.getItem("username")
          });
          axios.defaults.headers.post["Authorization"] = "Token " + token;
        } else {
          setState({
            loggedIn: "false"
          });
        }
      }
    }
  }, [state]);
  return (
    <UserAuthContext.Provider value={[state, setState]}>
      {children}
    </UserAuthContext.Provider>
  );
};

const TopicListController = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <TopicListContext.Provider value={[state, setState]}>
      {children}
    </TopicListContext.Provider>
  );
};

const TopicController = ({ children }) => {
  const [state, setState] = useState({ id: 1, posts: [] });

  return (
    <TopicContext.Provider value={[state, setState]}>
      {children}
    </TopicContext.Provider>
  );
};

const CategoryListController = ({ children }) => {
  const [state, setState] = useState({
    forum: [],
    grzybiarstwo: [],
    offtop: []
  });
  const fetchData = async () => setState(await CategoryListRequest());
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CategoryListContext.Provider value={[state, setState]}>
      {children}
    </CategoryListContext.Provider>
  );
};

const Last10PostsController = ({ children }) => {
  const [state, setState] = useState([]);
  const fetchData = async () => setState(await Last10PostsRequest());
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Last10PostsContext.Provider value={[state, setState]}>
      {children}
    </Last10PostsContext.Provider>
  );
};

const ContextCombine = ({ children }) => {
  return (
    <UserAuthController>
      <Last10PostsController>
        <CategoryListController>
          <TopicListController>
            <TopicController>{children}</TopicController>
          </TopicListController>
        </CategoryListController>
      </Last10PostsController>
    </UserAuthController>
  );
};

export default ContextCombine;
