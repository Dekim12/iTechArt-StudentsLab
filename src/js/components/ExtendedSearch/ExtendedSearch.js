import React from 'react';
import uuid from 'uuid/v1';
import { RangeContainer } from '../../redux/containers';
import { FILTER_PROPERTY } from '../../constants';
import './extendedSearch.scss';

const ExtendedSearch = () => {
  const generateFilter = filterProperty =>
    filterProperty.map(property => (
      <RangeContainer property={property} key={uuid()} />
    ));

  return (
    <article className='extended-search'>
      <h2>Filter result</h2>
      {generateFilter(FILTER_PROPERTY)}
    </article>
  );
};

export default ExtendedSearch;
