import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../CartContext/CartContex';


export const CartWidget = () => {
  const {totalProducts} = useCartContext();
    return (
      <>
      <button className='CartWidget'><ShoppingCartIcon /><span id="contadorCarrito">{totalProducts()||''}</span></button>
      
      </>
    );
  }
  
  export default CartWidget;