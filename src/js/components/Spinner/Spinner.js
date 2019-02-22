import React from 'react';
import PropTypes from 'prop-types';
import { defineClassName } from '../../appLogic/utils';
import * as constants from '../../constants/index';
import './spinner.scss';

const Spinner = ({ indicator }) => (
  <article
    className={`spinner ${defineClassName(indicator, constants.IS_LOADING)}`}
  >
    <div id='floatingCircles'>
      <div className='circle' id='frotate-01' />
      <div className='circle' id='frotate-02' />
      <div className='circle' id='frotate-03' />
      <div className='circle' id='frotate-04' />
      <div className='circle' id='frotate-05' />
      <div className='circle' id='frotate-06' />
      <div className='circle' id='frotate-07' />
      <div className='circle' id='frotate-08' />
    </div>
  </article>
);

Spinner.propTypes = {
  indicator: PropTypes.bool,
};

Spinner.defaultProps = {
  indicator: true,
};

export default Spinner;
