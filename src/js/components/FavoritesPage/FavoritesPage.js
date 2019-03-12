import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBeerList } from '../index';
import './favoritesPage.scss';

const FavoritesPage = ({ allBeers, favoriteBeer, isEmpty, changeFavorite }) => {
  if (isEmpty) {
    return (
      <section className='page favorites-page'>
        <h1>Favorite beer</h1>
      </section>
    );
  }

  return (
    <section className='page favorites-page'>
      <h1>Favorite beer</h1>
      <FavoriteBeerList
        favoriteBeers={favoriteBeer}
        allBeers={allBeers}
        changeFavorite={changeFavorite}
      />
    </section>
  );
};

FavoritesPage.propTypes = {
  favoriteBeer: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
  isEmpty: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
};

FavoritesPage.defaultProps = {
  favoriteBeer: [],
  allBeers: [],
  isEmpty: true,
};

export default FavoritesPage;
