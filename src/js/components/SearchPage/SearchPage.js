import React from 'react';
import PropTypes from 'prop-types';
import { BeerList, Search, SearchBeerList } from '../index';
import './searchPage.scss';

const SearchPage = ({
  data,
  getBeerByName,
  resultSearchBeer,
  getNextBeerPage,
  nextPageLoading,
  toggleNextPageLoading,
}) => {
  return (
    <section className='page search-page'>
      <Search onSearchPatternChange={getBeerByName} />
      {resultSearchBeer ? (
        <SearchBeerList renderData={resultSearchBeer} />
      ) : (
        <BeerList
          visualData={data}
          getNextPage={getNextBeerPage}
          pageLoading={nextPageLoading}
          startLoading={toggleNextPageLoading}
        />
      )}
    </section>
  );
};

SearchPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  getBeerByName: PropTypes.func.isRequired,
  getNextBeerPage: PropTypes.func.isRequired,
  toggleNextPageLoading: PropTypes.func.isRequired,
  resultSearchBeer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchPage.defaultProps = {
  data: [],
  resultSearchBeer: null,
};

export default SearchPage;
