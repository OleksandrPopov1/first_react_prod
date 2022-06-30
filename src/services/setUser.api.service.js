import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/users"
});

const setUser = (user) => axiosInstance.post('', user);

export {setUser};