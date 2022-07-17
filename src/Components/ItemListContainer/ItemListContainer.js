import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

const eventos = [

    {id: 1, banda: 'Product 1', category: 'rock', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3500,  stock: 10},
    {id: 2, banda: 'Product 1', category: 'rock', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 1500,  stock: 10},
    {id: 3, banda: 'Product 1', category: 'pop', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 4500,  stock: 10},
    {id: 4, banda: 'Product 1', category: 'rock', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3500,  stock: 10},
    {id: 5, banda: 'Product 1', category: 'pop', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3500,  stock: 10},
    {id: 6, banda: 'Product 1', category: 'rock', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3500,  stock: 10},
    {id: 7, banda: 'Product 1', category: 'indie', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 1500,  stock: 10},
    {id: 8, banda: 'Product 1', category: 'indie', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3500,  stock: 10},
    {id: 9, banda: 'Product 1', category: 'rock', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3600,  stock: 10},
    {id: 10, banda: 'Product 1', category: 'indie', image: '/img/banda 3.jpg', lugar: 'Av. Federico Lacroze 3455, C1426 EAB', fecha: '26 de julio', horario: '21:00 a 23:00hs',  price: 3800,  stock: 10},
]

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
     const getData = new Promise(resolve => {
        setTimeout(() => {
        resolve(eventos);  
        }, 1000)
     });

     if (categoryId) {
        getData.then(res => setData (res.filter(evento => evento.category === categoryId)));
     } else {
        getData.then(res => setData(res));
     }
    
    }, [categoryId])
    

   
    return(
        <>
            <Title greeting= {texto} />
            
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer