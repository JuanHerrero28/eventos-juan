import React from "react";
import { useCartContext } from "../CartContext/CartContex";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No Hay Entradas en el Carrito</p>
                <Link to='/'> Volver a Todos los Eventos</Link>
            </>
        );
        
    }
    return (
        <>
          {
           cart.map(product => <ItemCart key={product.id} product={product}/>)
          }
          <p>
            total: {totalPrice()}
          </p>
        </>
    )
}

export default Cart