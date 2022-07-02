import './car.css';

function Car({car, deleteCar, setCarsForUpdate}){
    const {id, model, price, year} = car;
    return (
        <div className='carContainer'>
            <div className='carContainerDescription'>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <div>
                <button onClick={() => setCarsForUpdate(car)}>Edit</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
}

export {Car}