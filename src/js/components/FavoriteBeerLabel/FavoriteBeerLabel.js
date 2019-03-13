import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../index';
import './favoriteBeerLabel.scss';

const FavoriteBeerLabel = ({ beerInfo, deleteFavoriteItem }) => {
  const deleteItem = () => {
    deleteFavoriteItem(beerInfo.id);
  };

  return (
    <div className='favorite-label'>
      <div className='favorite-info-wrapper'>
        <h2>{beerInfo.name}</h2>
        <p className='tagline'>{beerInfo.tagline}</p>
        <p className='description'>{beerInfo.description}</p>
      </div>
      <img src={beerInfo.image_url} alt={beerInfo.name} />
      <Link
        to={`/beer/${beerInfo.id}`}
        from='/search'
        className='open-page-link'
      >
        open
      </Link>
      <Button
        className='favorite-btn favorite-checked'
        makeChanges={deleteItem}
      >
        <i className='fa fa-star' aria-hidden='true' />
      </Button>
    </div>
  );
};

FavoriteBeerLabel.propTypes = {
  beerInfo: PropTypes.objectOf(PropTypes.any),
  deleteFavoriteItem: PropTypes.func.isRequired,
};

FavoriteBeerLabel.defaultProps = {
  beerInfo: {},
};

export default FavoriteBeerLabel;
