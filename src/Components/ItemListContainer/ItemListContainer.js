import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// 1 Importo el servicio Firestore
// 2 Creo un puntero al dato que queremos traer
// 3 Traer el dato con una promesa

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocs(queryFilter)
          .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
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