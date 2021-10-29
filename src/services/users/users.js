import api from "../api/api";

import { authHeader } from "../authorization/header";
const getUsers = () => {
  return api.get("/users", { headers: authHeader() });
};

const getUserBoard = (id) => {
  return api.get(`/users/${id}`, { headers: authHeader() });
};

const register = (params) => {
  return api.post(`/users/register`, params);
};

const logIn = (params) => {
  return api.post(`/users/login`, params);
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

// //wysylasz żądanie do bazy danych na ulr /tasks/id jakie tam wpadnie
// export const getTasks = async (id) => {
//   return await api.get(`/tasks/${id}`, { headers: authHeader() });
// };
// //zbierasz dane z opowiedzi na żądanie
// const user = getUser();
// const tasks = getTasks(user.id).then((response)=>{
//   //tuttaj jakies akcje np wrzucenie danych do inital state albo coś
//   console.log(response)
// }) ;
// console.log(tasks)