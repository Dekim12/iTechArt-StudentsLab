import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { defineClassName } from '../../appLogic/utils';
import * as constants from '../../constants/index';
import './popUpMenu.scss';

const PopUpMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`pop-up-menu ${defineClassName(isOpen, constants.MENU_VISIBLE)}`}
    onClick={toggleMenu}
    onKeyPress={toggleMenu}
  >
    <nav className='nav-links'>
      <NavLink exact to='/'>
        Search Beer
      </NavLink>
      <NavLink to='/favorite'>Favorite Beer</NavLink>
    </nav>
  </div>
);

PopUpMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
};

PopUpMenu.defaultProps = {
  isOpen: false,
};

export default PopUpMenu;
