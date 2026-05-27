import API from "./axios";

export const getTenants = async () => {

  const response = await API.get(
    "tenants/"
  );

  return response.data;
};