import auth from "@/firebase/firebase.config";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

const axiosConfig = axios.create({
  baseURL: "https://taste-trail-serve.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    const interceptor = axiosConfig.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          signOut(auth)
            .then(() =>
              axiosConfig
                .post("/users/logout")
                .then((res) => console.log(res))
                .catch((err) => {
                  console.log(err);
                })
            )
            .catch((err) => {
              console.log(err);
            });
        }

        return Promise.reject(err);
      }
    );

    return () => {
      axiosConfig.interceptors.response.eject(interceptor);
    };
  }, []);

  return axiosConfig;
};

export default useAxiosSecure;
