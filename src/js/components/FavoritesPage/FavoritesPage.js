import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Pagination, FavoriteBeerList } from '../index';
import {
  defineCountPaginationPages,
  selectFavoriteByPage,
  redirectPaginationPage,
} from '../../appLogic';
import './favoritesPage.scss';

const FavoritesPage = ({
  allBeers,
  favoriteBeer,
  isEmpty,
  changeFavorite,
  routingPage,
  history,
}) => {
  if (isEmpty) {
    return (
      <section className='page favorites-page'>
        <h1>Favorite beer</h1>
      </section>
    );
  }

  const paginationPageCount = defineCountPaginationPages(favoriteBeer);
  const deleteFavoriteItem = id => {
    changeFavorite(id, favoriteBeer);
  };

  if (paginationPageCount < routingPage || routingPage < 1) {
    redirectPaginationPage(paginationPageCount, routingPage, history);
  }

  return (
    <section className='page favorites-page'>
      <h1>Favorite beer</h1>
      <FavoriteBeerList
        favoriteBeers={selectFavoriteByPage(favoriteBeer, routingPage)}
        beers={allBeers}
        deleteFavoriteItem={deleteFavoriteItem}
      />
      {paginationPageCount === 1 ? null : (
        <Pagination pageCount={paginationPageCount} currentPage={routingPage} />
      )}
    </section>
  );
};

FavoritesPage.propTypes = {
  favoriteBeer: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
  isEmpty: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
  routingPage: PropTypes.number,
  history: PropTypes.objectOf(PropTypes.any),
};

FavoritesPage.defaultProps = {
  favoriteBeer: [],
  allBeers: [],
  isEmpty: true,
  routingPage: 1,
  history: {},
};

export default withRouter(FavoritesPage);
