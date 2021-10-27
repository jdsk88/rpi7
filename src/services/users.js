import api from "./api";
import { authHeader } from "./authorization/header";
const getUsers = () => {
  //   return api.get("/users");
};

const getUserBoard = () => {
    return api.get("/users/welcome", { headers: authHeader() });
};

const register = (params) => {
  return api.post(`/users/register`, params);
};

const logIn = (params) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/users/login`, params)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const passwdReset = (params) => {
  console.log(params);
};
export const UserServices = {
  getUsers: getUsers,
  getUserBoard: getUserBoard,
  register: register,
  logIn: logIn,
  passwdReset: passwdReset,
};
