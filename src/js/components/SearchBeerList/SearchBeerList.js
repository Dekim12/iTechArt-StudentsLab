import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { BeerLabel } from '../index';
import './searchBeerList.scss';

const SearchBeerList = ({ renderData }) => {
  const generateItemsList = items =>
    items.map(elem => (
      <BeerLabel
        url={elem.image_url}
        name={elem.name}
        tagline={elem.tagline}
        id={elem.id}
        key={uuid()}
      />
    ));

  return (
    <article className='search-result'>{generateItemsList(renderData)}</article>
  );
};

SearchBeerList.propTypes = {
  renderData: PropTypes.arrayOf(PropTypes.object),
};

SearchBeerList.defaultProps = {
  renderData: [],
};

export default SearchBeerList;
