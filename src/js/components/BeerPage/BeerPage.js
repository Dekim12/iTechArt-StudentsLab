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
import { addToLocalStorage } from '../../appLogic';
import { FAVORITE_CHECKED } from '../../constants';
import './beerPage.scss';

class BeerPage extends React.Component {
  state = {
    isChecked: this.props.isChecked,
  };

  addToFavorite = () => {
    const { id } = this.props.beer;
    const isFavorite = addToLocalStorage(id);

    if (isFavorite) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
    }
  };

  render() {
    const { isEmpty, isLoading, beer } = this.props;

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
            className={`fav-beer-btn ${
              this.state.isChecked ? FAVORITE_CHECKED : ''
            }`}
            makeChanges={this.addToFavorite}
          >
            <i className='fa fa-star' aria-hidden='true' />
          </Button>
        </article>
      </section>
    );
  }
}

BeerPage.propTypes = {
  isEmpty: PropTypes.bool,
  isLoading: PropTypes.bool,
  beer: PropTypes.objectOf(PropTypes.any),
};

BeerPage.defaultProps = {
  isLoading: true,
  isEmpty: true,
  beer: {},
};

export default BeerPage;
