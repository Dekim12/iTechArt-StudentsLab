import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className = '', content = '', makeChanges }) => (
  <button
    className={className}
    onClick={makeChanges}
    onKeyPress={makeChanges}
    type='button'
  >
    {content}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // makeChanges: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  content: '',
};

export default Button;
