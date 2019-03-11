import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../index';
import { FAVORITE_CHECKED } from '../../constants';
import './beerLabel.scss';

const BeerLabel = ({ ownProps, isFavorite, changeFavorite }) => {
  const { name, url, tagline, id } = ownProps;

  return (
    <article className='beer-label'>
      <div className='label-info-wrapper'>
        <img className='beer-logo' src={url} alt={`beer ${name}`} />
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <div className='button-wrapper'>
        <Link to={`/beer/${id}`} from='/search' className='open-page-link'>
          open
        </Link>
        <Button
          className={`favorite-btn ${isFavorite ? FAVORITE_CHECKED : ''}`}
          makeChanges={changeFavorite}
        >
          <i className='fa fa-star' aria-hidden='true' />
        </Button>
      </div>
    </article>
  );
};

BeerLabel.propTypes = {
  ownProps: PropTypes.objectOf(PropTypes.any),
  isFavorite: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
};

BeerLabel.defaultProps = {
  ownProps: {},
  isFavorite: false,
};

export default BeerLabel;
