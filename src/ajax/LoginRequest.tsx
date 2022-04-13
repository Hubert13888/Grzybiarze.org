import axios from "axios";

const LoginRequest = async (user, pass) => {
  try {
    let response = await axios({
      method: "POST",
      url: "https://pt-rest-api.herokuapp.com/login/",
      data: {
        username: user,
        password: pass
      }
    });
    if (response.data) {
      return response.data;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default LoginRequest;
