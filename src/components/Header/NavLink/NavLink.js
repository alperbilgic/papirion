import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = (props) => {
    return (
        <Link to={props.link} className='navlink w-nav-link' style={{textDecoration: 'none'}}>{props.children}</Link>
    );
}

export default NavLink;