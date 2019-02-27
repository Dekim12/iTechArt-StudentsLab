import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../appLogic';
import './method.scss';

const Method = ({ method }) => {
  const generateMashItems = mash => {
    if (mash) {
      return mash.map(item => (
        <span key={generateKey()}>
          {`${item.duration || 'X'} minutes at ${item.temp.value}°C`}
        </span>
      ));
    }
    return null;
  };
  console.log(method);
  return (
    <div className='method-wrapper'>
      <h2>Method</h2>
      <ul className='method'>
        <li>
          <h4>Mash</h4>
          {generateMashItems(method.mash_temp)}
        </li>
        <li>
          <h4>Fermentation</h4>
          <span>{`Perform at ${method.fermentation.temp.value} °C`}</span>
        </li>
        <li>
          <h4>Twist</h4>
          <span>{method.twist || 'Without twist'}</span>
        </li>
      </ul>
    </div>
  );
};

Method.propTypes = {
  method: PropTypes.objectOf(PropTypes.any),
};

Method.defaultProps = {
  method: {},
};

export default Method;
