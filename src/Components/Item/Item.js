import './Item.css';
import { useCartContext } from "../CartContext/CartContex";
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    const nombre = useCartContext();
    console.log('Item:', nombre);
    return (
        
        <Link to={`/detalle/${info.id}`} className="eventos">
            <div className="item-card">
             
               <img src={info.image}></img>
            
               <p>{info.banda}</p>
            
            </div>
            
        </Link>
        
    )
}

export default Item