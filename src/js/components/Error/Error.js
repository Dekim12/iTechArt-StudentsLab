import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { defineClassName } from '../../appLogic';
import { getTranslatedText } from '../../appLogic/internalization/internalizationProvider';
import { ERROR_VISIBLE } from '../../constants';
import smile from '../../../image/smile.png';
import './error.scss';

const Error = ({ isError, errorToggle, history }) => {
  const toggle = useCallback(() => {
    errorToggle();
    history.push('/');
  });

  return (
    <section
      className={`error-wrapper ${defineClassName(isError, ERROR_VISIBLE)}`}
    >
      <div className='error'>
        <p>{getTranslatedText('error')}</p>
        <img src={smile} alt='smile' />
        <i className='fa fa-times-circle' aria-hidden='true' onClick={toggle} />
      </div>
    </section>
  );
};

Error.propTypes = {
  isError: PropTypes.bool,
  errorToggle: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any),
};

Error.defaultProps = {
  isError: false,
  history: {},
};

export default withRouter(Error);
