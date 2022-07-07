import {useForm} from "react-hook-form";

import {carService} from "../../../services";
import './formComponent.css';

function FormComponent(){

    const {register, handleSubmit, reset, formState:{errors}} = useForm({mode:"all"});

    const submit = async (newCar) =>{
        await carService.newCar(newCar);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: 0,
                    max: 1000000
                })}/>
                <input type="number" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    required: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <br/>
                <button>Save</button>
            </form>

            <div>
                {errors.model && <span>Only Alpha min 1 max 20 ch</span>}
                {errors.price && <span>Min 0 Max 1 000 000</span>}
                {errors.year && <span>Min 1990 Max current year</span>}
            </div>
        </div>
    );
}

export {FormComponent}