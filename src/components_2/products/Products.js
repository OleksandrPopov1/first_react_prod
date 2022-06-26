import {useEffect, useState} from "react";

import {Product} from "../product/Product";
import {ProductDetails} from "../productDetails/ProductDetails";

function Products(){

    const [products, setProducts] = useState([]);


    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(value => setProducts(value))
    }, []);


    return (
        <div>

            {products.map((product, index) => <Product
                key={index}
                product={product}
            /> )}
        </div>
    );
}

export {Products};

