import axios, { AxiosInstance } from "axios";

const axiosInstance : AxiosInstance = axios.create({
    baseURL :" ",
    timeout : 5000,
    headers:{
        "Content-Type":"application/json"
    }
}); 

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = "Bearer token";
        return config;
    },
    (error) => {

    }
)