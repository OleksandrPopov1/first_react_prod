import './carComponent.css';

function CarComponent({car, deleteCar}){
    return (
        <div className='carBlock'>
            CarID: {car.id} <br/>
            Model: {car.model} <br/>
            Year: {car.year} <br/>
            Price: {car.price} <br/>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
    );
}

export {CarComponent};