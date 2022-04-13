import axios from "axios";

const TopicRequest = async (topic_id) => {
  try {
    let response = await axios({
      method: "GET",
      url: "https://pt-rest-api.herokuapp.com/topic/" + topic_id + "/"
    });
    if (response.data) {
      return response.data;
    } else {
      return { posts: [] };
    }
  } catch (err) {
    return { posts: [] };
  }
};

export default TopicRequest;
