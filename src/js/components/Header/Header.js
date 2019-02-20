import React from 'react';
import { BurgerBtnContainer } from '../../redux/containers';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <BurgerBtnContainer />
    </div>
  );
};
export default Header;
