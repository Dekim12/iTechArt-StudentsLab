import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { BeerLabel } from '../index';
import './searchResult.scss';

const SearchResult = ({ beerItems, searchItems }) => {
  const visualData = searchItems || beerItems;

  const generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  return (
    <article className='search-result'>
      {beerItems.length ? generateItemsList(visualData) : null}
    </article>
  );
};

SearchResult.propTypes = {
  beerItems: PropTypes.arrayOf(PropTypes.object),
  searchItems: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SearchResult.defaultProps = {
  beerItems: [],
  searchItems: null,
};

export default SearchResult;
