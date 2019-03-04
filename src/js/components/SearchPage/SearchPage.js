import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult, Search } from '../index';
import './searchPage.scss';

const SearchPage = ({ data, getBeerByName, resultSearchBeer }) => {
  return (
    <section className='page search-page'>
      <Search setData={getBeerByName} />
      <SearchResult beerItems={data} searchItems={resultSearchBeer} />
    </section>
  );
};

SearchPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  getBeerByName: PropTypes.func.isRequired,
  resultSearchBeer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchPage.defaultProps = {
  data: [],
  resultSearchBeer: null,
};

export default SearchPage;
