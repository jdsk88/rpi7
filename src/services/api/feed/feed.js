import api from "../api";

export const FeedsServices = {
  getFeeds: async () => {
    return await api.get("/feeds");
  },
  createFeed: (params) => {
    return api.post(`/feeds/create`, params);
  },
  addFiles: (params) => {
    return api.post(`/images/create`, params);
  },
  addFComments: (params) => {
    return api.put(`/feeds/addComent/${params.feedId}`, params);
  },
  upload: (files) => {
    const filesArray = Array.from(files.selectedFiles);
    let formData = new FormData();
    for (let i = 0; i < filesArray.length; i++) {
      formData.append("files", filesArray[i]);
    }
    return api.post("/images/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
