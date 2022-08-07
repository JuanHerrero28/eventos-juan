import { Link } from 'react-router-dom';
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from '../CartContext/CartContex';
import './ItemDetail.css';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);

    }

    return (
        <div className="container1">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1 className='title-detail'>{data.banda}</h1>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;