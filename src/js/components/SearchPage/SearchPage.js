import React from 'react';
import PropTypes from 'prop-types';
import { BeerListContainer } from '../../redux/containers';
import { Search, SearchBeerList } from '../index';
import './searchPage.scss';

const SearchPage = ({ getBeerByName, resultSearchBeer }) => (
  <section className='page search-page'>
    <Search onSearchPatternChange={getBeerByName} />
    {resultSearchBeer ? (
      <SearchBeerList renderData={resultSearchBeer} />
    ) : (
      <BeerListContainer />
    )}
  </section>
);

SearchPage.propTypes = {
  getBeerByName: PropTypes.func.isRequired,
  resultSearchBeer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchPage.defaultProps = {
  resultSearchBeer: null,
};

export default SearchPage;
