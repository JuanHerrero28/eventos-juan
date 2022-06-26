import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
      <button className='CartWidget'><ShoppingCartIcon /><span id="contadorCarrito">0</span></button>
    );
  }
  
  export default CartWidget;