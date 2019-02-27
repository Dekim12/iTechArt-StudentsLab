import React from 'react';
import PropTypes from 'prop-types';
import { Ingredients, Method } from '../index';
import { selectionNecessaryData, generateKey } from '../../appLogic';
import './beerPage.scss';

class BeerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { beer: null };
  }

  componentDidMount = () => {
    console.log('woork');
  };

  // floorValue = value => value && value.toFixed(1);

  // generateItems = data => {
  //   if (data) {
  //     return data.map(elem => <li key={generateKey()}>{elem}</li>);
  //   }
  //   return data;
  // };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   // console.log('easjga');
  //   // if (nextProps.beersData.length) {
  //   //   console.log('work------', nextProps.beersData);
  //   //   return true;
  //   // }
  //   // const { beersData, match } = this.props;
  //   // const beer = selectionNecessaryData(beersData, match.params.id);
  //   // this.setState({ beer });
  //   return false;
  // };

  render() {
    console.log(this.props);

    return (
      <section className='page beer-page'>
        {/* <article className='main-beer-info'>
          <div className='beer-description'>
            <h1>{name}</h1>
            <i className='fa fa-star' aria-hidden='true' />
            <span className='tagline'>{tagline}</span>
            <p>{description}</p>
            <div className='prop-and-food'>
              <div className='prop-list-wrapper'>
                <h2>Properties</h2>
                <ul className='list beer-properties'>
                  <li>
                    ABV <i className='fa fa-info-circle' aria-hidden='true' />
                    <span className='prop-value'>{this.floorValue(abv)}</span>
                  </li>
                  <li>
                    IBU
                    <i className='fa fa-info-circle' aria-hidden='true' />
                    <span className='prop-value'>{this.floorValue(ibu)}</span>
                  </li>
                  <li>
                    EBC
                    <i className='fa fa-info-circle' aria-hidden='true' />
                    <span className='prop-value'>{this.floorValue(ebc)}</span>
                  </li>
                </ul>
              </div>
              <div className='prop-list-wrapper'>
                <h2>Food Pairing</h2>
                <ul className='list food-pairing'>
                  {this.generateItems(foodPairing)}
                </ul>
              </div>
            </div>
          </div>
          <img src={url} alt={name} />
        </article>
        <article className='brewing'>
          <h2>Brewing</h2>
          <p>{brewing}</p>
          <div className='ingredients-and-method'>
            <Ingredients ingredients={ingredients} water={water} />
            <Method method={method} />
          </div>
        </article> */}
      </section>
    );
  }
}

// BeerPage.propTypes = {
//   beerPageData: PropTypes.objectOf(PropTypes.any),
// };

// BeerPage.defaultProps = {
//   beerPageData: {},
// };

export default BeerPage;
