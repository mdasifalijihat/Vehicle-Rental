// import axios from "axios";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5000",
// });

// // Automatically attach admin token to secure requests
// // axiosSecure.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("admin-token");
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });

// const useAxiosSecure = () => {
//   return axiosSecure;
// };

// export default useAxiosSecure;

import axios from "axios";

const useAxiosSecure = () => {
  const instance = axios.create({
    baseURL: "http://localhost:5000",
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default useAxiosSecure;
