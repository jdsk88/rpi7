export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    console.log("token sended");
    return { "x-access-token": user.token };
  } else {
    return {};
  }
};
