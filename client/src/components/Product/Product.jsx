import React from 'react';
import "./Product.css";

const Product = props => {
    return(
        <div className="Product-Wrapper">
            <div className="Product">
                <div className="Product-Image-Wrapper">
                    <img src={props.photo} alt={props.name} className="Product-Image size-image" />
                </div>
                <div className="Product-Title">
                    <p className="Product-Name">{props.name}</p>
                </div>
                <div className="Product-Data">
                    <small className="Product-Price">${props.price}</small>
                    <button onClick={props.addToCart} className="product-button Product-Add">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;