import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { getTranslatedText } from '../../appLogic/internalization/internalizationProvider';
import './method.scss';

const Method = ({ fermentation, temp, twist }) => {
  const generateMashItems = mash =>
    mash.map(item => (
      <span key={uuid()}>
        {`${item.duration || 'X'} minutes at ${item.temp.value}°C`}
      </span>
    ));

  return (
    <div className='method-wrapper'>
      <h2>{getTranslatedText('method')}</h2>
      <ul className='method'>
        <li>
          <h4>{getTranslatedText('mash')}</h4>
          {generateMashItems(temp)}
        </li>
        <li>
          <h4>{getTranslatedText('fermentation')}</h4>
          <span>{`Perform at ${fermentation.temp.value} °C`}</span>
        </li>
        <li>
          <h4>{getTranslatedText('twist')}</h4>
          <span>{twist || 'Without twist'}</span>
        </li>
      </ul>
    </div>
  );
};

Method.propTypes = {
  fermentation: PropTypes.objectOf(PropTypes.any),
  temp: PropTypes.arrayOf(PropTypes.object),
  twist: PropTypes.string,
};

Method.defaultProps = {
  fermentation: {},
  temp: [],
  twist: '',
};

export default Method;
