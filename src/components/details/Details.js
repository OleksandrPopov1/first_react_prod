function Details({makeup}){

    return (
        <div>
            <p>
                <b>Description:</b> <br/>
                {makeup.description}
            </p>
            Price: {makeup.price} <br/>
            <a href={makeup.product_link} target="_blank">Go to buy</a>
        </div>
    );
}

export {Details}