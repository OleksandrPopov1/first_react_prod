import {axiosService} from "./axios.cervice";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    newCar: (car) => axiosService.post(urls.cars, car),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
};

export {
    carService
};