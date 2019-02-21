import React from 'react';
import PropTypes from 'prop-types';
import { defineClassName } from '../../appLogic/utils';
import * as constants from '../../constants/index';
import './hamburgerBtn.scss';

const HamburgerBtn = ({ isOpen, toggleMenu }) => (
  <button
    className={`hamburger-toggle ${defineClassName(
      isOpen,
      constants.BUTTON_ON
    )}`}
    onClick={toggleMenu}
    onKeyPress={toggleMenu}
    type='button'
  >
    <span className='btn-line' />
    <span className='btn-line' />
    <span className='btn-line' />
    <span className='btn-line' />
  </button>
);

HamburgerBtn.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
};

HamburgerBtn.defaultProps = {
  isOpen: false,
};

export default HamburgerBtn;
