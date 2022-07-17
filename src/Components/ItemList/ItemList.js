import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(eventos => <Item key={eventos.id} info={eventos} />)
    )
}

export default ItemList