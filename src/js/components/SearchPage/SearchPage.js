import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from '../index';
import './searchPage.scss';

const SearchPage = ({ data }) => {
  return (
    <section className='page search-page'>
      <SearchResult beerItems={data} />
    </section>
  );
};

SearchPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

SearchPage.defaultProps = {
  data: [],
};

export default SearchPage;
