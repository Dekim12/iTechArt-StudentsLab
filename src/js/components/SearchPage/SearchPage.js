import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from '../index';
import './searchPage.scss';

const SearchPage = ({ data, setBeerData }) => {
  return (
    <section className='page search-page'>
      <SearchResult beerItems={data} setData={setBeerData} />
    </section>
  );
};

SearchPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  setBeerData: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  data: [],
};

export default SearchPage;
