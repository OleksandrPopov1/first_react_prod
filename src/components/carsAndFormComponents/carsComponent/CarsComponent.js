import {useEffect, useState} from "react";

import {carService} from "../../../services";
import {CarComponent} from "../carComponent/CarComponent";
import './carsComponent.css';

function CarsComponent(){

    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.allCars().then(({data}) => setCars([...data]))
    }, []);


    const deleteCar = async (id) => {
        await carService.deleteCar(id);
        const allCars = [...cars];
        const index = allCars.findIndex(value => value.id === id);
        console.log(index)
        if(index !== -1) {
            allCars.splice(index, 1);
            setCars(allCars);
        }
    }

    return (
        <div className='carsBlock'>
            {cars.map(car => <CarComponent key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
}

export {CarsComponent};