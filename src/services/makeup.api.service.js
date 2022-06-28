import axios from "axios";

const allMakeups = axios.create({
    baseURL: "https://makeup-api.herokuapp.com/api/v1/products",

});

const getMakeups = () => allMakeups.get('.json?brand=covergirl').then(value => value);

const getMakeup = (id) => allMakeups.get('/' + id).then(value => value);

export {getMakeups, getMakeup};