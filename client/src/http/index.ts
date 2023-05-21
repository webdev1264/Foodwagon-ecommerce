import axios from "axios";

export const API_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});
