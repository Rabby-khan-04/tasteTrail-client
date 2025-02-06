import axios from "axios";
import { useEffect } from "react";

const axiosConfig = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosConfig.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("Log out user");
        }
      }
    );
  }, []);

  return axiosConfig;
};

export default useAxiosSecure;
