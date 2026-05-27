import API from "./axios";

export const getActivities = async () => {

  const response = await API.get(
    "activities/"
  );

  return response.data;
};