import React from 'react';
import {
  Ingredients,
  Method,
  FoodPairing,
  Properties,
  Button,
  Spinner,
} from '../index';
import { selectionNecessaryData } from '../../appLogic';
import './beerPage.scss';

const BeerPage = ({ beersData, match, getBeerById }) => {
  if (!beersData || match.params.id < 1) {
    return <section className='page beer-page' />;
  }

  const star = <i className='fa fa-star' aria-hidden='true' />;
  const beer = selectionNecessaryData(beersData, match.params.id);
  if (!beer) {
    getBeerById(match.params.id);
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
        <Button className='fav-beer-btn' content={star} />
      </article>
    </section>
  );
};

export default BeerPage;
