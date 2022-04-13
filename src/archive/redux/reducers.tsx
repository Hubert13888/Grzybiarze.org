import { combineReducers } from "redux";

const posts = (state = ["coś", "coś1", "coś2"], action) => {
  let oldState = [...state];
  switch (action.type) {
    case "REMOVEPOST":
      oldState = oldState.filter((post) => {
        return action.payload !== post.id;
      });
      break;

    case "TEST":
      oldState.push(action.payload);
      break;
  }
  return oldState;
};

const accountInitialState = { loggedIn: false, email:"" }

const account = (state = accountInitialState, action) => {
  switch (action.type) {
    case "LOGIN":{
      return {
        loggedIn: true,
        email: action.payload.email
      }
    }
    case "LOGOUT":{
      return {
        loggedIn: false,
        email: ""
      }
    }
    default:{
      return state
    }
  }
}

export default combineReducers({
  posts,
  account
});
