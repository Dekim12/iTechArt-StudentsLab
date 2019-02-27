import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../appLogic';
import './ingredients.scss';

const Ingredients = ({ ingredients, water }) => {
  const generateMaltItems = malt => {
    if (malt) {
      return malt.map(item => (
        <span key={generateKey()}>{`${item.name} - ${item.amount.value} ${
          item.amount.unit
        }`}</span>
      ));
    }
    return null;
  };

  const generateHopsItems = hops => {
    if (hops) {
      return hops.map(item => (
        <span key={generateKey()}>{`${item.name} - ${item.amount.value} ${
          item.amount.unit
        }, add when ${item.add}`}</span>
      ));
    }
    return null;
  };

  return (
    <div className='ingredients-wrapper'>
      <h2>Ingredients</h2>
      <ul className='list ingredients'>
        <li>
          <h4>Water</h4>
          <span>{`${water.value} ${water.unit}`}</span>
        </li>
        <li>
          <h4>Malt</h4>
          {generateMaltItems(ingredients.malt)}
        </li>
        <li>
          <h4>Hops</h4>
          {generateHopsItems(ingredients.hops)}
        </li>
        <li>
          <h4>Yeast</h4>
          <span>{ingredients.yeast}</span>
        </li>
      </ul>
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.any),
  water: PropTypes.objectOf(PropTypes.any),
};

Ingredients.defaultProps = {
  ingredients: {},
  water: {},
};

export default Ingredients;
