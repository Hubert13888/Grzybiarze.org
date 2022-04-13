import axios from "axios";

const AddTopicRequest = async (category_id, topic_name, content) => {
  try {
    let response = await axios({
      method: "POST",
      url: "https://pt-rest-api.herokuapp.com/topic/",
      data: {
        category_id: category_id,
        topic_name: topic_name,
        content: content
      }
    });
    if (response.status === 201 || response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default AddTopicRequest;
