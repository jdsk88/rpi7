const getToken = () => localStorage.getItem("token");

const setToken = (token) => localStorage.setItem("token", token);

const removeToken = () => localStorage.removeItem("token");

const setUser = (user) => localStorage.setItem("user", JSON.stringify(user));

const removeUser = () => localStorage.removeItem("user");

const getUser = () => JSON.parse(localStorage.getItem("user"));
export const AuthService = {
  getToken: getToken,
  setToken: setToken,
  removeToken: removeToken,
  setUser: setUser,
  removeUser: removeUser,
  getUser: getUser,
};
