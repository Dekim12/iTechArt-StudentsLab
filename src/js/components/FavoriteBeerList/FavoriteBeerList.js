import React from 'react';
import PropTypes from 'prop-types';
import './favoriteBeerList.scss';

const FavoriteBeerList = ({ allBeers, favoriteBeers }) => (
  <article className='favorite-beer-list'>asdfksa</article>
);

FavoriteBeerList.propTypes = {
  favoriteBeers: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
};

FavoriteBeerList.defaultProps = {
  favoriteBeers: [],
  allBeers: [],
};

export default FavoriteBeerList;
