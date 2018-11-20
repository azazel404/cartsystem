import React, { Fragment } from "react";
import "./CartItem.css";

const CartItem = props => {
    return(
        <Fragment>
            <tr>
                <td>
                    {" "}
                    <img 
                    src={props.photo}
                    alt={props.name}
                    className="Cart-Item-Photo"
                    />{" "}
                </td>
                <td>{props.name}</td>
                <td>
                    <button onClick={props.removeItem} className="Quantity-Button">
                    -
                    </button>
                    <span className="Cart-Item-Quantity">{props.quantity}</span>
                    <button onClick={props.addItem} className="Quantity-Button">
                        +
                    </button>
                </td>
                <td>${props.price}</td>
                <td><i className="fa fa-times" onClick={props.removeWholeItem} style={{ color: 'black', cursor: 'pointer' }}></i></td>
            </tr>
        </Fragment>
    )
}


export default CartItem;
