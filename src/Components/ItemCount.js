import React, { useState } from 'react';
import './ItemCount.css';
import Swal from 'sweetalert2';


function ItemCount ({ stock }){
    const [num, setNum] = useState(0);

    const sumar = () => {
        if(num < stock){
           setNum(num + 1)   
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Atencion',
                text: 'Ya ha agotado el stock!',
                timer: 2000 
              })
        }
        
    }
    const resta  = () => {
        if(num>0){
            setNum(num - 1)
        }
    }
    const reiniciar = () => {
        setNum(0)
    }

    return (
        <>
            <div className='containerCount'>
            <h3> {num} </h3>
            <p> { stock > 1 ? `${stock} Entradas Disponibles` : `${stock} Entrada Disponible`}</p>
            <button onClick={sumar}> + </button>
            <button onClick={resta}> - </button>
            <button onClick={reiniciar}> Reiniciar </button>
            <button className='botonAgregar'>{ num > 0 ? `Agregar al carrito` : `Elegi tu cantidad`}</button>

            </div>
            
        </>
    )
}

export default ItemCount;