import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:909/api",
  withCredentials: true,
});

export default instance;
