import axios from "axios";

const Last10PostsRequest = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: "https://pt-rest-api.herokuapp.com/posts/recent_posts/"
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

export default Last10PostsRequest;
