import axios from "axios";

// const baseURL = "http://localhost:3001/";
const baseURL = process.env.REACT_APP_BASE_URL;
console.log("baseURL:", baseURL);
const clientServer = {
  get: async (url) => await axios.get(`${baseURL}${url}`),

  post: async (url, data) => await axios.post(`${baseURL}${url}`, data),

  put: async (url, data) => await axios.put(`${baseURL}${url}`, data),

  patch: async (url, data) => await axios.patch(`${baseURL}${url}`, data),

  delete: async (url) => await axios.delete(`${baseURL}${url}`),
};

export default clientServer;
