//
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000",
});

// get all jobs✅

export const getAlljobs = () => {
  return api.get("/api/jobs");
};

// get me✅
export const sendPostRegister = (formData) => {
  return api.post("api/auth/register", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//Login

export const sendPostLogin = (formData) => {
  return api.post("api/auth/login", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
