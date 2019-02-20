import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className='header'>
    <ul className='nav-links'>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink to='/favorite'>Favorite beer</NavLink>
    </ul>
  </div>
);

export default Header;
