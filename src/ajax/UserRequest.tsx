import axios from "axios";

const UserRequest = async (user_id: number) => {
  try {
    let response = await axios({
      method: "GET",
      url: "https://pt-rest-api.herokuapp.com/users/" + user_id + "/"
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

export default UserRequest;
