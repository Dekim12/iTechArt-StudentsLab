import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBeerList } from '../index';
import './favoritesPage.scss';

const FavoritesPage = ({ allBeers, favoriteBeer, isEmpty }) => {
  if (isEmpty) {
    return <section className='page favorites-page' />;
  }

  return (
    <section className='page favorites-page'>
      <h1>Favorite beer</h1>
      <FavoriteBeerList favoriteBeers={favoriteBeer} allBeers={allBeers} />
    </section>
  );
};

FavoritesPage.propTypes = {
  favoriteBeer: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
  isEmpty: PropTypes.bool,
};

FavoritesPage.defaultProps = {
  favoriteBeer: [],
  allBeers: [],
  isEmpty: true,
};

export default FavoritesPage;
