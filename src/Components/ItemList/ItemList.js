import Item from "../Item/Item";
import React from "react";
import './ItemList.css';


const ItemList = ({data = []}) => {
    return (
        <section className="flex-row">
        
        {data.map(eventos => <Item key={eventos.id} info={eventos} />)}
        </section>
    )
}

export default ItemList