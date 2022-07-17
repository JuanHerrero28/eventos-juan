
import { useCartContext } from "../CartContext/CartContex";
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    const nombre = useCartContext();
    console.log('Item:', nombre);
    return (
        <Link to={`/detalle/${info.id}`} className="eventos">
            <img src={info.image}></img>
            <p>{info.banda}</p>
        </Link>
    )
}

export default Item