import axios from "axios";
import { AuthService } from "./authorization/auth";
const url = "http://192.168.0.16:8888/api";
const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use((config) => {
  const token = AuthService.getToken();

  if (token) {
    return {
      ...config,
      headers: { ...config.headers, authorization: `Bearer ${token}` },
    };
  } else {
    return config;
  }
});

export default api;
