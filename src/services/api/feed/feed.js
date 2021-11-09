import api from "../api";

export const FeedsServices = {
  getFeeds: () => {
    return api.get("/feeds");
  },
  createFeed: (params) => {
    return api.post(`/feeds/create`, params);
  },
  createImage: (params) => {
    return api.post(`/images/create`, params);
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
