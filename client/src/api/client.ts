import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 서버 주소와 포트 지정
});

export default client;
