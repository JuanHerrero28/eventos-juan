import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { NavLink} from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="container">
               <span>
                <NavLink className= "nav-logo" to= '/'>EventBoard</NavLink>
               </span>
                <span>
                    <NavLink className= "nav__link" to='/'>Todos los Eventos</NavLink>
                </span>
                <span>
                    <NavLink className= "nav__link" to={'/category/rock'}>Rock</NavLink>
                </span>
                <span>
                    <NavLink className= "nav__link" to={'/category/indie'}>Indie</NavLink>
                </span>
                <span>
                    <NavLink className= "nav__link" to={'/category/pop'}>Pop</NavLink>
                </span>
                <span>
                    <NavLink className= "nav__link" to={'cart'}><CartWidget/></NavLink>
                </span>
            </div>    
            
        
    )
}