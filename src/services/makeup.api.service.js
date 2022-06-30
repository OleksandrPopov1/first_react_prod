import axios from "axios";

const allMakeups = axios.create({
    baseURL: "https://makeup-api.herokuapp.com/api/v1",

});

const getMakeups = () => allMakeups.get('products.json?brand=covergirl').then(value => value);

const getMakeup = (id) => allMakeups.get('products' + id + '.json').then(value => value);

export {getMakeups, getMakeup};