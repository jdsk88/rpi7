import api from "../api";

export const FeedsServices = {
  getFeeds: async () => {
    return await api.get("/feeds");
  },
  createFeed: async (params) => {
    return await api.post(`/feeds/create`, params);
  },
  addFiles: async (params) => {
    return await api.post(`/images/create`, params);
  },
  addFComments: async (params) => {
    return await api.put(`/feeds/addComment/${params.feedId}`, params);
  },
  upload: async (files) => {
    const filesArray = Array.from(files.selectedFiles);
    let formData = new FormData();
    for (let i = 0; i < filesArray.length; i++) {
      formData.append("files", filesArray[i]);
    }
    return await api.post("/images/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
