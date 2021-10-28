import api from "../api/api";



const getDevices = async (params) => {
  const result = await api.get(`/list/${params}`);
  const { data } = result;
  return data;
};
const getDevice = async (params) => {
  const result = await api.get(`/list/i/${params}`);
  const { data } = result;
  return data;
};
const getDeviceById = async (params) => {
  const result = await api.get(`/list/${params}`);
  const { data } = result;
  return data;
};
const getDeviceByIndex = async (params) => {
  const result = await api.get(`/list/#/${params}`);
  const { data } = result;
  return data;
};
const postDevice = async (params) => {
  const result = await api.post(`/list/create`, params);
  return result;
};
const patchDevice = async (params) => {
  const result = await api.patch(`/list/update/${params.id}`, params);
  return result;
};

const updateDeviceState = async (sessionID, params) => {
  const result = await api.patch(
    `/list/update/${sessionID}/${params._id}`,
    params
  );
  return result;
};

const addTaskToList = async (List_id, params) => {
  const result = await api.put(`/list/addTask/${List_id}`, params.tasks);
  return result;
};
const deleteList = async (params) => {
  const result = await api.delete(`/list/${params}`);
  return result;
};
const deleteLists = async () => {
  const result = await api.delete("/list/delete");
  return result;
};
const deleteSessionLists = async (params) => {
  const result = await api.delete(`/list/delete/${params}`);
  return result;
};

const deleteTask = async (List_id, Task_id) => {
  console.log(Task_id)
  const result = await api.delete(`/list/${List_id}/${Task_id}`);
  return result;
};


const setTaskState = async (List_id, task) => {
  const result = await api.patch(`/list/update/${List_id}/${task.id}`,{tasks:task});
  return result;
};
const setListState = async (List_id,list) => {
  const result = await api.patch(`/list/${List_id}`,list);
  return result;
};


export const tasksServices = {
  
};
