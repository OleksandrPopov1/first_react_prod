import {useDispatch} from "react-redux";

import css from './car.module.css';
import {carActions} from "../../redux";

function Car({car}) {

    const {model, id, price, year} = car;
    const dispatch = useDispatch();
    return (
        <div className={css.carBlock}>
            <div>id {id}</div>
            <div>model {model}</div>
            <div>year {year}</div>
            <div>price {price}</div>

            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
        </div>
    );
}

export {Car};