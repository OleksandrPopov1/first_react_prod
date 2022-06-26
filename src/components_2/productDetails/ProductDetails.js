// function ProductDetails({product:{price, description, rating}}){
    function ProductDetails({product}){
    console.log(product)
    return (
        <div>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Rating: <br/>
                {product.rating.rate} from {product.rating.count}</p>
        </div>
    );
}

export {ProductDetails};