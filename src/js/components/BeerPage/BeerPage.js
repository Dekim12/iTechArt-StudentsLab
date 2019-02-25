import React from 'react';
import PropTypes from 'prop-types';
import './beerPage.scss';

const BeerPage = ({ beerPageData }) => {
  console.log(beerPageData);
  return <section className='page beer-page'>g</section>;
};

BeerPage.propTypes = {
  beerPageData: PropTypes.objectOf(PropTypes.any),
};

BeerPage.defaultProps = {
  beerPageData: {},
};

export default BeerPage;
