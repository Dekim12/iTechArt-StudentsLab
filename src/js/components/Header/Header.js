import React from 'react';
import { BurgerBtnContainer } from '../../redux/containers';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <BurgerBtnContainer />
    </header>
  );
};
export default Header;
