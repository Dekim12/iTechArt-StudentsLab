import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { BeerLabel } from '../index';
import './searchResult.scss';

const SearchResult = ({ beerItems }) => {
  const generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  return (
    <article className='search-result'>
      {beerItems.length ? generateItemsList(beerItems) : null}
    </article>
  );
};

SearchResult.propTypes = {
  beerItems: PropTypes.arrayOf(PropTypes.object),
};

SearchResult.defaultProps = {
  beerItems: [],
};

export default SearchResult;
