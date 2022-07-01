import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { listadoProductos } from '../data/asyncMock';
import { ItemList } from './ItemList';

const ItemListContainer = ({greeting}) => {

const [productos, setProducto] = useState([])
//const [productosFetch, setProductoFetch] = useState([])



const getProductos = () => {
  return new Promise ((resolve, reject) =>{
    setTimeout(() => {
      listadoProductos.length>0?
      resolve(listadoProductos)
      :
      reject("no hay datos")
    }, 2000);
  })

}
// Utilizando promise
useEffect(() => {
  getProductos()
  .then(res => setProducto(res))
  .catch(err => console.log(err))
}, [])

// Utilizando fetch
// useEffect(() => {
//  fetch('./data/data.json')
//  .then(res => res.json)
//  .then(data => setProductoFetch(data))
//.catch(err => console.log(err))
//}, [])

//console.log("productos:", productos);
//console.log("productosFetch:", productosFetch);


    return (
      <div className='ItemListContainer'>
          <h2> {greeting} </h2>
          <ItemList listadoProductos={productos}/>
          
      </div>
    );
  }
  
  export default ItemListContainer;