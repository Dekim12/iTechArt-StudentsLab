import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../index';
import './beerLabel.scss';

const BeerLabel = ({ data }) => {
  const url = data.image_url;
  const { name, tagline } = data;

  return (
    <article className='beer-label'>
      <div className='label-info-wrapper'>
        <img className='beer-logo' src={url} alt={`beer ${name}`} />
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <div className='button-wrapper'>
        <Link to={`/beer/${data.id}`} from='/search' className='open-page-link'>
          open
        </Link>
        <Button className='favorite-btn'>
          <i className='fa fa-star' aria-hidden='true' />
        </Button>
      </div>
    </article>
  );
};

BeerLabel.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

BeerLabel.defaultProps = {
  data: {},
};

export default BeerLabel;
