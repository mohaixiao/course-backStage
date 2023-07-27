import axios, { type AxiosRequestConfig } from "axios";
import { useAuth } from "../hooks/auth";
import { message } from "antd";
export const BASE_URL = "http://localhost:8081";
const instance = axios.create({ baseURL: `${BASE_URL}/api/admin/v1` });

// 请求拦截器
instance.interceptors.request.use((config) => {
  const { token } = useAuth();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// 响应拦截器
instance.interceptors.response.use((response) => {
  const { clearLoginState } = useAuth();
  const data = response.data;

  if (data.code !== 0) {
    message.error(data.msg);
    clearLoginState();
  }
  return response;
});

export default async function request(
  url: string,
  options?: AxiosRequestConfig
) {
  return (
    await instance({
      url,
      ...options,
    })
  ).data;
}
