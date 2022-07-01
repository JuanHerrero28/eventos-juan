import React from "react";
import './Item.css';
export const Item = ({banda, img, precio}) => {
    return (
        <div className="container-card">
            <div className="card-estilos">
                <img src={img} alt={banda} className='imagen'/>
                <div className="card-body">
                    <h5 className="card-titulo">{banda}</h5>
                    <p>{precio}</p>

                </div>
            </div>
        </div>
    )
}