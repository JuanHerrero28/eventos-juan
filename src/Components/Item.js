import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
export const Item = ({ id, banda, category, image, precio  }) => {
  /* aca tenemos nuestro Link */
  return (
    <Link to={`/product/${id}`}>
      
      <div className="container-card">
            <div className="card-estilos">
                <img src={image} alt={banda} className='imagen'/>
                <div className="card-body">
                    <h5 className="card-titulo">{banda}</h5>
                    <p>{category}</p>
                    <p>{precio}</p>

                </div>
            </div>
        </div>
    </Link>
  );
};