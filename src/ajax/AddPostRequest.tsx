import axios from "axios";

const AddPostRequest = async (topic_id, content) => {
  try {
    let response = await axios({
      method: "POST",
      url: "https://pt-rest-api.herokuapp.com/posts/",
      data: {
        topic_id: topic_id,
        content: content
      }
    });
    console.log(response);
    if (response.status === 201 || response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default AddPostRequest;
