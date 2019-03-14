import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { FavoriteBeerLabel } from '../index';
import { findFavoriteItem } from '../../appLogic';
import './favoriteBeerList.scss';

const FavoriteBeerList = ({ beers, favoriteBeers, deleteFavoriteItem }) => {
  const generateFavoriteLabels = (allBeers, favoriteIds) =>
    favoriteIds.map(id => (
      <FavoriteBeerLabel
        beerInfo={findFavoriteItem(allBeers, id)}
        key={uuid()}
        deleteFavoriteItem={deleteFavoriteItem}
      />
    ));

  return (
    <article className='favorite-beer-list'>
      {generateFavoriteLabels(beers, favoriteBeers)}
    </article>
  );
};

FavoriteBeerList.propTypes = {
  favoriteBeers: PropTypes.arrayOf(PropTypes.number),
  beers: PropTypes.arrayOf(PropTypes.any),
  deleteFavoriteItem: PropTypes.func.isRequired,
};

FavoriteBeerList.defaultProps = {
  favoriteBeers: [],
  beers: [],
};

export default FavoriteBeerList;
