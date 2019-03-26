import React from 'react';
import uuid from 'uuid/v1';
import { BEER_PROPERTY } from '../../constants';
import './properties.scss';

const Properties = props => {
  const { t } = props;

  const generateBeerProperty = arr =>
    arr.map(item => (
      <li key={uuid()}>
        <span className='prop-value'>
          {props[item] ? props[item].toFixed(1) : 'X'}
        </span>
        <div className='info-label'>
          <i className='fa fa-info-circle' aria-hidden='true' />
          <span className='tooltip'>{t(BEER_PROPERTY[item].tooltip)}</span>
        </div>
        <span className='abbreviation'>{BEER_PROPERTY[item].abbreviation}</span>
      </li>
    ));

  return (
    <div className='prop-list-wrapper'>
      <h2>{t('properties')}</h2>
      <ul className='list beer-properties'>
        {generateBeerProperty(Object.keys(BEER_PROPERTY))}
      </ul>
    </div>
  );
};

export default Properties;
