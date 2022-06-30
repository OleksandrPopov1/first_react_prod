import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

const setComment = (comment) => axiosInstance.post('',comment);

export {setComment};