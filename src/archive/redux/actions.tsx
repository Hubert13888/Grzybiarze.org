const removePost = (id: number) => {
  return {
    type: "REMOVEPOST",
    payload: id
  };
};

const test = (a: string) => {
  return {
    type: "TEST",
    payload: a
  };
};

const login = (email: string, password: string) => {
  return {
    type: "LOGIN",
    payload: { email: email, password: password }
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
    payload: {}
  };
};

export { removePost, test, login, logout };
