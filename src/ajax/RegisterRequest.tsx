import axios from "axios";

const RegisterRequest = async (username, email, password) => {
  try {
    let response = await axios({
      method: "POST",
      url: "https://pt-rest-api.herokuapp.com/users/",
      data: {
        username: username,
        email: email,
        password: password
      }
    });
    if (response.data) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default RegisterRequest;
