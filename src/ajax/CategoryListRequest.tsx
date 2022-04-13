import axios from "axios";

const CategoryListRequest = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: "https://pt-rest-api.herokuapp.com/types/"
    });
    if (response.data) {
      return response.data[0];
    } else {
      return { forum: [], grzybiarstwo: [], offtop: [] };
    }
  } catch (err) {
    return { forum: [], grzybiarstwo: [], offtop: [] };
  }
};

export default CategoryListRequest;
