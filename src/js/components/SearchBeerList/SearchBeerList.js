import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { ExtendedSearch } from '../index';
import { BeerLabelContainer } from '../../redux/containers';
import './searchBeerList.scss';

const SearchBeerList = ({ renderData }) => {
  const generateItemsList = items =>
    items.map(elem => (
      <BeerLabelContainer
        url={elem.image_url}
        name={elem.name}
        tagline={elem.tagline}
        id={elem.id}
        key={uuid()}
      />
    ));

  return (
    <article className='search-result'>
      <ExtendedSearch />
      <div className='search-items-wrapper'>
        {generateItemsList(renderData)}
      </div>
    </article>
  );
};

SearchBeerList.propTypes = {
  renderData: PropTypes.arrayOf(PropTypes.object),
};

SearchBeerList.defaultProps = {
  renderData: [],
};

export default SearchBeerList;
