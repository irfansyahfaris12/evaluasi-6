import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar () {
    return (
    <div>  
        <nav>
            <ul classname ="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/food">Food</Link>
                </li>
                <li>
                    <Link to="/drink">Drink</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>    
    )
}

export default Navbar;
