import axios from "axios";
import { useRouter } from "next/navigation";

const api = axios.create({
  baseURL: process.env.BASE_URL, 
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
//   withCredentials:true,
  

});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized , redirecting to login page");
      const router = useRouter();
      router.push("/login");
    }
    return Promise.reject(error);
  }
);
export default api;
