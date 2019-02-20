import React from 'react';
import { NavLink } from 'react-router-dom';
import './popUpMenu.scss';

const PopUpMenu = ({ isOpen, toggleMenu }) => (
  <div
    className='pop-up-menu'
    style={isOpen ? { display: 'flex' } : { display: 'none' }}
    onClick={toggleMenu}
    onKeyPress={toggleMenu}
  >
    <nav className='nav-links'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink to='/search'>Search Beer</NavLink>
      <NavLink to='/favorite'>Favorite Beer</NavLink>
    </nav>
  </div>
);

export default PopUpMenu;
