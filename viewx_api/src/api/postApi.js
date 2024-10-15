import apiClient from "./instance";

const getAllPost = () => {
  const response = apiClient.get("posts");
  return response;
};

export default getAllPost;
