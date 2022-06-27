import axios from "axios";

const allUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => allUsers.get('').then(value => value);

const getUser = (id) => allUsers.get('/' + id).then(value => value);

export {getUsers, getUser};