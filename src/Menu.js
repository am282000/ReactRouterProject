import React from 'react';
import './Menustyle.css';
import {Link} from 'react-router-dom';

const Menu = ()=>{
    return (
        <div className="Menustyle">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Menu;