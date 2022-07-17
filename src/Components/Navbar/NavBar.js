import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                     <NavLink className= "nav_link" to= '/'>EventBoard</NavLink>
                </div>
            <ul className="nav__list">
                <li>
                    <NavLink className= "nav__link" to='/'>Todos los Eventos</NavLink>
                </li>
                <li>
                    <NavLink className= "nav__link" to={'/category/rock'}>Rock</NavLink>
                </li>
                <li>
                    <NavLink className= "nav__link" to={'/category/indie'}>Indie</NavLink>
                </li>
                <li>
                    <NavLink className= "nav__link" to={'/category/pop'}>Pop</NavLink>
                </li>
                <li>
                    <NavLink className= "nav__link" to={'cart'}><CartWidget/></NavLink>
                </li>
            </ul>    
            </nav>
        </div>
    )
}