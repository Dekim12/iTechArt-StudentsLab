import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import './foodPairing.scss';

const FoodPairing = ({ food, t }) => {
  const generateItems = data => data.map(elem => <li key={uuid()}>{elem}</li>);

  return (
    <div className='food-list-wrapper'>
      <h2>{t('food')}</h2>
      <ul className='list food-pairing'>{generateItems(food)}</ul>
    </div>
  );
};

FoodPairing.propTypes = {
  food: PropTypes.arrayOf(PropTypes.string),
  t: PropTypes.func.isRequired,
};

FoodPairing.defaultProps = {
  food: [],
};

export default FoodPairing;
