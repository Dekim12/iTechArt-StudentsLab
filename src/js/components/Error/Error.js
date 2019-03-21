import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { defineClassName } from '../../appLogic';
import { ERROR_VISIBLE } from '../../constants';
import smile from '../../../image/smile.png';
import './error.scss';

const Error = ({ isError, toggle, history }) => {
  const toggleError = useCallback(() => {
    toggle();
    history.push('/');
  });

  return (
    <section
      className={`error-wrapper ${defineClassName(isError, ERROR_VISIBLE)}`}
    >
      <div className='error'>
        <p>Something went wrong!</p>
        <img src={smile} alt='smile' />
        <i
          className='fa fa-times-circle'
          aria-hidden='true'
          onClick={toggleError}
        />
      </div>
    </section>
  );
};

Error.propTypes = {
  isError: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any),
};

Error.defaultProps = {
  isError: false,
  history: {},
};

export default withRouter(Error);
