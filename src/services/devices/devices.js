import api from "../api";

const hitDevice = (ip, method) => {
    console.log(ip+method)
  return  api.get(ip + method);
};

export const deviceServices = {
  hitDevice: hitDevice,
};
