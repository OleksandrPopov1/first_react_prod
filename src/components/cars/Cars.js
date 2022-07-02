import {useEffect, useState} from "react";

import {carService} from "../../cervices";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";

function Cars(){

    const [cars, setCars] = useState([]);
    const [carsForUpdate, setCarsForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);

    const addCar = (car) => {
        setCars([...cars, car])
    };

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        const res = [...cars];
        const index = res.findIndex(value => value.id === id);

        if (index !== -1){
            res.splice(index, 1);
            setCars(res);
        }
    }

    const updateCar = (car) => {
        const res = [...cars];
        const find = res.find(value => value.id === carsForUpdate.id);

        if (find) {
            Object.assign(find, car);
            setCars(res);
            setCarsForUpdate(null);
        }
    }

    return (
        <div>
            <CarForm addCar={addCar} updateCar={updateCar} carsForUpdate={carsForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarsForUpdate={setCarsForUpdate}/>)}

        </div>
    );
}

export {Cars}