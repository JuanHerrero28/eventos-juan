import React from "react";
import { Item } from "./Item";
import './ItemList.css';
export const ItemList = ({listadoProductos}) => {

    console.log('listadoProductos',listadoProductos)

    return (

        <div className="container">
            {listadoProductos.map((unProducto) => <Item banda={unProducto.banda} img={unProducto.img} precio={unProducto.precio} />)}
        </div>

    )
}