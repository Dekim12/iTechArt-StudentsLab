import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { getTranslatedText } from '../../appLogic/internalization/internalizationProvider';
import './ingredients.scss';

const Ingredients = ({ ingredients, water }) => {
  const generateMaltItems = malt =>
    malt.map(item => (
      <span key={uuid()}>{`${item.name} - ${item.amount.value} ${
        item.amount.unit
      }`}</span>
    ));

  const generateHopsItems = hops =>
    hops.map(item => (
      <span key={uuid()}>{`${item.name} - ${item.amount.value} ${
        item.amount.unit
      }, add when ${item.add}`}</span>
    ));

  return (
    <div className='ingredients-wrapper'>
      <h2>{getTranslatedText('ingredients')}</h2>
      <ul className='list ingredients'>
        <li>
          <h4>{getTranslatedText('water')}</h4>
          <span>{`${water.value} ${water.unit}`}</span>
        </li>
        <li>
          <h4>{getTranslatedText('malt')}</h4>
          {generateMaltItems(ingredients.malt)}
        </li>
        <li>
          <h4>{getTranslatedText('hops')}</h4>
          {generateHopsItems(ingredients.hops)}
        </li>
        <li>
          <h4>{getTranslatedText('yeast')}</h4>
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
