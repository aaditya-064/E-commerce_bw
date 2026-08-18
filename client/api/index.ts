import axios from "axios";

//* create axios instance
export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  withCredentials: true,
});

//* interceptor (req, res) => middleware jastai
api.interceptors.request.use(
  function (config) {
    // console.log("request intercept", config.url);
    return config;
  },
  function (error) {
    // console.log(error);
    return Promise.reject(error);
  },
);
