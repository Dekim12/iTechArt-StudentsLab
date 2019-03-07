import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBeerList } from '../index';
import './favoritesPage.scss';

class FavoritesPage extends React.Component {
  shouldComponentUpdate = nextProps => {
    const { allBeers, favoriteBeers } = this.props;
    if (
      nextProps.favoriteBeers.length === favoriteBeers.length &&
      nextProps.allBeers.length === allBeers.length
    ) {
      return false;
    }
    return true;
  };

  render() {
    const { allBeers, favoriteBeers } = this.props;

    return (
      <section className='page favorites-page'>
        <h1>Favorite beer</h1>
        <FavoriteBeerList favoriteBeers={favoriteBeers} allBeers={allBeers} />
      </section>
    );
  }
}

FavoritesPage.propTypes = {
  favoriteBeers: PropTypes.arrayOf(PropTypes.number),
  allBeers: PropTypes.arrayOf(PropTypes.any),
};

FavoritesPage.defaultProps = {
  favoriteBeers: [],
  allBeers: [],
};

export default FavoritesPage;
