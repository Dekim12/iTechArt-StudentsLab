import React from 'react';
import PropTypes from 'prop-types';
import { BeerListContainer } from '../../redux/containers';
import { Search, SearchBeerList } from '../index';
import './searchPage.scss';

const SearchPage = ({
  getBeerByName,
  resultSearch,
  resetFilterData,
  resetSearchData,
}) => (
  <section className='page search-page'>
    <h1>Punk IPA beer</h1>
    <Search
      onSearchPatternChange={getBeerByName}
      resetFilterData={resetFilterData}
      resetSearchData={resetSearchData}
    />
    {resultSearch ? (
      <SearchBeerList renderData={resultSearch} />
    ) : (
      <BeerListContainer />
    )}
  </section>
);

SearchPage.propTypes = {
  getBeerByName: PropTypes.func.isRequired,
  resetFilterData: PropTypes.func.isRequired,
  resetSearchData: PropTypes.func.isRequired,
  resultSearch: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchPage.defaultProps = {
  resultSearch: null,
};

export default SearchPage;
