import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';


export const Item = ({id, banda, img, precio, category}) => {
    return (
        <Link to={`/Item/${id}`}>
        <div className="container-card">
            <div className="card-estilos">
                <img src={img} alt={banda} className='imagen'/>
                <div className="card-body">
                    <h5 className="card-titulo">{banda}</h5>
                    <p>{category}</p>
                    <p>{precio}</p>

                </div>
            </div>
        </div>
        </Link>
    )
}