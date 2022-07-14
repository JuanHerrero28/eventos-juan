import CartWidget from './CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import CartContext from './CartContext';

export const Navbar = () => {
  const { contextFunction } = useContext (CartContext);
  contextFunction();
   const categories = [
    { id: 1, address: '/', text: 'TODOS LOS EVENTOS'},
    { id: 2, address: '/category/rock', text: 'ROCK'},
    { id: 3, address: '/category/indie', text: 'INDIE'},
    { id: 4, address: '/category/pop', text: 'POP'},
   ];

  return (
    <div className='Navbar'>
        <span className='nav-logo'>EventBoard</span>
        <div className='nav-items'>
            {categories.map((cat) => {
              return (

                <Link to={cat.address} className="links" key={cat.id}>
                {cat.text}
                </Link>

              );
            } )}
        </div>
        <CartWidget />
    </div>
  );
}

export default Navbar;