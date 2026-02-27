//

import { useEffect } from "react";
import { api } from "../services/getServices";
import { useAuth } from "./useAuth";

const useAxios = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    //add a request interceptor

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = user?.token;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Add a response interceptor
    // const responseIntercept = api.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     const orginalRequest = error.config;

    //     // If the error status is 401 and there is no originalRequest._retry flag,
    //     // it means the token has expired and we need to refresh it
    //     if (error.response.status === 401 && !orginalRequest._retry) {
    //       orginalRequest._retry = true;

    //       try {
    //         const refreshToken = user?.refreshToken;

    //         //api call for refrshtoken
    //         const response = await axios.post(
    //           `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
    //           { refreshToken },
    //         );
    //         const { token } = response.data;

    //         console.log(`New Token: ${token}`);
    //         setUser({ ...user, authToken: token });

    //         // Retry the original request with the new token
    //         originalRequest.headers.Authorization = `Bearer ${token}`;

    //         return axios(orginalRequest);
    //       } catch (error) {
    //         throw error;
    //       }
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    // cleanup function

    return () => {
      api.interceptors.request.eject(requestIntercept);
      //   api.interceptors.response.eject(responseIntercept);
    };
  }, [user?.token]);

  return api;
};

export default useAxios;
