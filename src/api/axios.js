import axios from "axios";

const API = axios.create({
  baseURL:
    "https://breathe-esg-platform-1-we6n.onrender.com/api/",
});

API.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem(
        "access"
      );

    const publicRoutes = [
      "auth/register/",
      "auth/login/",
      "auth/refresh/",
    ];

    const isPublicRoute =
      publicRoutes.some(
        (route) =>
          config.url?.includes(
            route
          )
      );

    if (
      token &&
      !isPublicRoute
    ) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export default API;