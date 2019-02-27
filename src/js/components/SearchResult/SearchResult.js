import React from 'react';
import PropTypes from 'prop-types';
import { BeerLabel } from '../index';
import { generateKey } from '../../appLogic/utils';
import './searchResult.scss';

const SearchResult = ({ beerItems }) => {
  const generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={generateKey()} />);

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
