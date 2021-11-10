import axios from "axios";

const url = `https://maps.googleapis.com/maps/api/geocode/`;

const geocoding = axios.create({ baseURL: url });

export const geo = {
  decoder: (format, key, lat, lng) => {
    return geocoding.get(`${format}?address=${lat},${lng}&key=${key}`);
  },
  encoder: () => {},
};

