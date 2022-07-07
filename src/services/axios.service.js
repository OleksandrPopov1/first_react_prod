import axios from "axios";

const axiosService = axios.create({
    baseURL: 'http://owu.linkpc.net/api/v2/cars'
});

const carService = {
    allCars: () => axiosService.get(''),
    newCar: (car) => axiosService.post('', car),
    deleteCar: (id) => axiosService.delete(`/${id}`),
    // editeCar: (id, car) => axiosService.put(`/${id}`, car)
}

export {
    carService
};