const getToken = () => localStorage.getItem("token");
const setToken = (token) => localStorage.setItem("token", token);
const removeToken = () => localStorage.removeItem("token");

const setUser = (user) => localStorage.setItem("user", JSON.stringify(user));
const getUser = () => JSON.parse(localStorage.getItem("user"));
const removeUser = () => localStorage.removeItem("user");

export const AuthService = {
  getToken: getToken,
  setToken: setToken,
  removeToken: removeToken,
  setUser: setUser,
  removeUser: removeUser,
  getUser: getUser,
};

export const token = {
  set: (token) => localStorage.setItem("token", token),
  get: () => localStorage.getItem("token"),
  remove: () => localStorage.removeItem("token"),
};
export const userId = {
  set: (id) => localStorage.setItem("userId", id),
  get: () => localStorage.getItem("userId"),
  remove: () => localStorage.removeItem("userId"),
};
