import API from "./axios";

export const loginUser = async (
  username,
  password
) => {

  const response = await API.post(
    "auth/login/",
    {
      username,
      password,
    }
  );

  return response.data;
};