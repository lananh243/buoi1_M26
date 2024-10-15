import apiClient from "./instances";

const getAllEmployee = () => {
  const response = apiClient.get("employees");
  return response;
};

export default getAllEmployee;
