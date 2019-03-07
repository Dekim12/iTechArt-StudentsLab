import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className = '', makeChanges, children }) => (
  <button
    className={className}
    onClick={makeChanges}
    onKeyPress={makeChanges}
    type='button'
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  makeChanges: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  children: '',
};

export default Button;
