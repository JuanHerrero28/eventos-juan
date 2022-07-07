import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { listadoProductos } from '../data/asyncMock';
import { ItemList } from './ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

const [productos, setProducto] = useState([])
//const [productosFetch, setProductoFetch] = useState([])
const [isLoading, setIsLoading] = useState(true);
const {idcategoria} = useParams();
console.log(idcategoria);



const getProductos = () => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
      const myData = idcategoria ? listadoProductos.filter(item => item.category === idcategoria) :listadoProductos;
      resolve(myData);

      
    }, 1000);
  })

}
// Utilizando promise
useEffect(() => {
  setIsLoading(true);
  getProductos()
  .then(res => setProducto(res))
  .catch(err => console.log(err))
  .finally(() => setIsLoading(false));
}, [idcategoria])

// Utilizando fetch
// useEffect(() => {
//  fetch('./data/data.json')
//  .then(res => res.json)
//  .then(data => setProductoFetch(data))
//.catch(err => console.log(err))
//}, [])

//console.log("productos:", productos);
//console.log("productosFetch:", productosFetch);


    return isLoading ? (
      <h1>Cargando...</h1>
    ) : (
      <div className='ItemListContainer'>
          <h2> {greeting} </h2>
          <ItemList listadoProductos={productos}/>
          
      </div>
    );
  }
  
  export default ItemListContainer;