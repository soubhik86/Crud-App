import axios from "axios";
import { baseUrl } from "./Endpoint";

export const AxiosInstance = axios.create({
  baseURL: baseUrl

});

// Add a request interceptor
AxiosInstance.interceptors.request.use(function (config) {
 const token = localStorage.getItem("token") || sessionStorage.getItem("token")
  if ( token !== null || token !== undefined) {
    config.headers["x-access-token"] = token;
}
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
AxiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});