import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='nav-logo'>EventBoard</span>
        <div className='nav-items'>
            <a href='/home'>Home</a>
            <a href='/eventos'>Eventos</a>
            <a href='/contacto'>Contacto</a>
        </div>
        <CartWidget />
    </div>
  );
}

export default Navbar;