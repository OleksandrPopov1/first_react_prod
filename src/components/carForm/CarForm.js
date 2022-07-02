import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../cervices";


function CarForm({addCar, updateCar, carsForUpdate}){

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm();

    useEffect(() => {
        if (carsForUpdate) {
            setValue('model', carsForUpdate.model);
            setValue('price', carsForUpdate.price);
            setValue('year', carsForUpdate.year);
        }
    },[carsForUpdate]);

    const submit = async (newCar) => {
        if (!carsForUpdate){
            const {data} = await carService.create(newCar);
            addCar(data);
        } else {
            const {data} = await carService.updateById(carsForUpdate.id,newCar);
            updateCar(data);
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Model'} {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'Price'} {...register('price', {
                    required: true,
                    valueAsNumber: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="number" placeholder={'Year'} {...register('year', {
                    required: true,
                    valueAsNumber: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>{carsForUpdate ? 'Edit' : 'Save'}</button>
            </form>
            <div>{errors.model && <span>Only Alpha min 1 max 20 ch</span>}
                {errors.price && <span>Min 0 Max 1 000 000</span>}
                {errors.year && <span>Min 1990 Max current year</span>}</div>
        </div>
    );
}

export {CarForm}