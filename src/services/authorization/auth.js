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
