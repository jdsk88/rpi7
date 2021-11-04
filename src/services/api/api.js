import axios from "axios";
// const url = "http://85.222.120.170:8888/api";
const url = "https://192.168.39.28:8989/api";
// const url = "http://localhost:8888/api";
const api = axios.create({
  baseURL: url,
});

// api.interceptors.request.use((config) => {
//   const token = AuthService.getToken();

//   if (token) {
//     return {
//       ...config,
//       headers: { ...config.headers, authorization: `x-access-token: ${token}` },
//     };
//   } else {
//     return config;
//   }
// });

export default api;
