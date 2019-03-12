import React from 'react';
import PropTypes from 'prop-types';
import {
  Ingredients,
  Method,
  FoodPairing,
  Properties,
  Button,
  Spinner,
} from '../index';
import { FAVORITE_CHECKED } from '../../constants';
import { defineClassName } from '../../appLogic';
import './beerPage.scss';

const BeerPage = ({ isEmpty, isLoading, beer, changeFavorite, isFavorite }) => {
  if (isEmpty) {
    return <section className='page beer-page' />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className='page beer-page'>
      <article className='main-beer-info'>
        <div className='beer-description'>
          <h1>{beer.name}</h1>
          <span className='tagline'>{beer.tagline}</span>
          <p>{beer.description}</p>
          <div className='prop-and-food'>
            <Properties
              alcohol={beer.alcohol}
              bitterness={beer.bitterness}
              beerColor={beer.beerColor}
            />
            <FoodPairing food={beer.foodPairing} />
          </div>
        </div>
        <img src={beer.url} alt={beer.name} />
      </article>
      <article className='brewing'>
        <h2>Brewing</h2>
        <p>{beer.brewing}</p>
        <div className='ingredients-and-method'>
          <Ingredients ingredients={beer.ingredients} water={beer.water} />
          <Method
            fermentation={beer.method.fermentation}
            temp={beer.method.mash_temp}
            twist={beer.method.twist}
          />
        </div>
        <Button
          className={`fav-beer-btn ${defineClassName(
            isFavorite,
            FAVORITE_CHECKED
          )}`}
          makeChanges={changeFavorite}
        >
          <i className='fa fa-star' aria-hidden='true' />
        </Button>
      </article>
    </section>
  );
};

BeerPage.propTypes = {
  isEmpty: PropTypes.bool,
  isLoading: PropTypes.bool,
  beer: PropTypes.objectOf(PropTypes.any),
  isFavorite: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
};

BeerPage.defaultProps = {
  isLoading: true,
  isEmpty: true,
  beer: {},
  isFavorite: false,
};

export default BeerPage;
