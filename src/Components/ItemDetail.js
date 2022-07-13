import './ItemDetail.css';
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({
  id,
  banda,
  category,
  image,
  precio,
  
}) => {
    const [add, setAdd] = useState(false)
    const addToCart = () => {
      setAdd(!add)  
    }
     
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${banda}`} className="flex-col" />
      <section className="flex-col">
        <h1>{banda}</h1>
        <h2>{precio}</h2>
        {
            add ?
            <h1>¡Añadido!</h1>
            :
              <ItemCount stock={10} onAdd={addToCart} />
        }
        <Link to="/cart">
        <button > Finalizar Compra </button>
        </Link>
      </section>
     
    </div>
  );
};