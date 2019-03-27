import React from 'react';
import { LanguageSwitcher } from '../index';
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
      <div className='translate-btn-wrapper'>
        <LanguageSwitcher />
        <BurgerBtnContainer />
      </div>
    </header>
  );
};
export default Header;
