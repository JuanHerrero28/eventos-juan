import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";


const eventos = {
    id: 1,
    banda: "Banda 1",
    img: "./img/banda 3.jpg",
    lugar: "Av. Federico Lacroze 3455, C1426 EAB",
    fecha: "26 de julio",
    horario: "21:00 a 23:00hs",
    precio: 3500,
    stock: 10
};


export const ItemDetailCotainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {   
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(eventos);
            }, 3000)
        });
        getData.then(res => setData(res));
    }, [])




    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailCotainer;