import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { getTranslatedText } from '../../appLogic/internalization/internalizationProvider';
import './foodPairing.scss';

const FoodPairing = ({ food }) => {
  const generateItems = data => data.map(elem => <li key={uuid()}>{elem}</li>);

  return (
    <div className='food-list-wrapper'>
      <h2>{getTranslatedText('food')}</h2>
      <ul className='list food-pairing'>{generateItems(food)}</ul>
    </div>
  );
};

FoodPairing.propTypes = {
  food: PropTypes.arrayOf(PropTypes.string),
};

FoodPairing.defaultProps = {
  food: [],
};

export default FoodPairing;
