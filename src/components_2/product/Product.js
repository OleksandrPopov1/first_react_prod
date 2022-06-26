import {useState} from "react";

import {ProductDetails} from "../productDetails/ProductDetails";
import "./product.css"

function Product({product}){
    const [products, setProducts] = useState({});

    const productButtons = (item) => {
        setProducts(item);
    }
    return (
        <div className={"productBlock"}>
            <h2>{product.id}. {product.title}</h2>
            <p>{product.category}</p>
            <img src={product.image} alt={product.title}/>
            <button onClick={() => productButtons(product)}>Details</button>

            {products.id && <ProductDetails
                products={products}/>}
        </div>
    );
}

export {Product};