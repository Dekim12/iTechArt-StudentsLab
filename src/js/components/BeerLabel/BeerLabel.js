import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../index';
import './beerLabel.scss';

const BeerLabel = ({ data, setData }) => {
  const star = <i className='fa fa-star' aria-hidden='true' />;
  const url = data.image_url;
  const { name, tagline } = data;

  const setPageData = () => {
    setData(data);
  };

  return (
    <article className='beer-label'>
      <div className='label-info-wrapper'>
        <img className='beer-logo' src={url} alt={`beer ${name}`} />
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <div className='button-wrapper'>
        <NavLink
          exact
          to='/beer'
          className='open-page-link'
          onClick={setPageData}
        >
          OPEN
        </NavLink>
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
  setData: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any),
};

BeerLabel.defaultProps = {
  data: {},
};

export default BeerLabel;
