import api from "../api/api";
import { token } from "../authorization/auth";
import { authHeader } from "../authorization/header";

export const UserServices = {
  getUsers: () => {
    return api.get("/users", { headers: authHeader() });
  },
  getUserBoard: (id) => {
    return api.get(`/users/${id}?token=${token.get()}`);
  },
  register: (params) => {
    return api.post(`/users/register`, params);
  },
  logIn: (params) => {
    return api.post(`/users/login`, params);
  },
  passwdReset: (params) => {
    console.log(params);
  },
};
