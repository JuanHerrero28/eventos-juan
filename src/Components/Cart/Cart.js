import React from "react";
import { useCartContext } from "../CartContext/CartContex";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer:{
            name:'juan',
            email:'juan@gmail.com',
            phone:'1145698745',
            addres:'asddd'
        },
        items: cart.map(product =>({id:product.id, banda: product.banda, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))   
    }

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
          <button onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart