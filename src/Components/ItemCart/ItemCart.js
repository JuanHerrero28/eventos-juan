import React from "react";
import { useCartContext } from "../CartContext/CartContex";
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.banda} />
            <div>
                <p>titulo: {product.banda}</p>
                <p>cantidad: {product.quantity}</p>
                <p>precio: {product.price}</p>
                <p>Subtotal:${product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart