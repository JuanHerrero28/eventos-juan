import React from "react";
import { useCartContext } from "../CartContext/CartContex";
import './ItemCart.css';



const ItemCart = ({ product }) => {
    
    const { removeProduct } = useCartContext();
    
    
    return (
        <div className="itemCart">
            <img className="img-cart" src={product.image} alt={product.banda} />
            <div className="itemCart-content">
                <p className="detalle-cart">Titulo: {product.banda}</p>
                <p className="detalle-cart">Cantidad: {product.quantity}</p>
                <p className="detalle-cart">Precio: ${product.price}</p>
                <p className="detalle-cart">Subtotal:${product.quantity * product.price} </p>
                <button className="button-cart" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart