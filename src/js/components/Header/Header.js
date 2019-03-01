import React from 'react';
import { BurgerBtnContainer } from '../../redux/containers';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img
          src='https://www.brewdog.com/media/logo/default/brewdog-logo.png'
          alt='logo'
        />
      </a>
      <BurgerBtnContainer />
    </header>
  );
};
export default Header;
