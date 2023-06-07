import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";
const HOME_IP = '192.168.8.199';
const WORK_IP = '192.168.3.42';

const instance = axios.create({
  baseURL: `http://${HOME_IP}:8000/api/v1`,
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const token = await SecureStore.getItemAsync("user-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
