import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../index';
import './beerLabel.scss';

const BeerLabel = ({ data }) => {
  const star = <i className='fa fa-star' aria-hidden='true' />;
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
          OPEN
        </Link>
        <Button
          className='favorite-btn'
          content={star}
          makeChanges={() => console.log('btn works')}
        />
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
