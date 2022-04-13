import axios from "axios";

const TopicRequest = async (category_id) => {
  try {
    let response = await axios({
      method: "GET",
      url: "https://pt-rest-api.herokuapp.com/topic/?category=" + category_id
    });
    if (response.data) {
      return response.data;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};

export default TopicRequest;
