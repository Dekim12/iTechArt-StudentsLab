import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { FavoriteBeerLabel } from '../index';
import { findFavoriteItem } from '../../appLogic';
import './favoriteBeerList.scss';

const FavoriteBeerList = ({ allBeers, favoriteBeers, changeFavorite }) => {
  const deleteFavoriteItem = id => {
    changeFavorite(id, favoriteBeers);
  };

  const generateFavoriteLabels = (beers, favoriteIds) =>
    favoriteIds.map(id => (
      <FavoriteBeerLabel
        beerInfo={findFavoriteItem(beers, id)}
        key={uuid()}
        changeFavorite={deleteFavoriteItem}
      />
    ));

  return (
    <article className='favorite-beer-list'>
      {generateFavoriteLabels(allBeers, favoriteBeers)}
    </article>
  );
};

FavoriteBeerList.propTypes = {
  favoriteBeers: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
  changeFavorite: PropTypes.func.isRequired,
};

FavoriteBeerList.defaultProps = {
  favoriteBeers: [],
  allBeers: [],
};

export default FavoriteBeerList;
