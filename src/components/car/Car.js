function Car({car}){

    const {model, id, price, year} = car;

    return (
        <div>
            <div>id {id}</div>
            <div>model {model}</div>
            <div>year {year}</div>
            <div>price {price}</div>
        </div>
    );
}

export {Car};