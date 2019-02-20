import React from 'react';
import './hamburgerBtn.scss';

const HamburgerBtn = ({ isOpen, toggleMenu }) => {
  const menuBtn = React.createRef();

  return (
    <button
      className={`hamburger-toggle ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
      onKeyPress={toggleMenu}
      ref={menuBtn}
      type='button'
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerBtn;
