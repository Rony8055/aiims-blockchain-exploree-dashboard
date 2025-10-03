import axios from "axios";

const BASEURL = {
  ENDPOINT_URL: process.env.NEXT_PUBLIC_API_ENDPOINT,
};

const headers = {
  // "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
};

const axiosInstance = axios.create({
  baseURL: BASEURL.ENDPOINT_URL,
  headers: headers,
});

export default axiosInstance;
