import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { Range } from '../index';
import { FILTER_PROPERTY } from '../../constants';
import './extendedSearch.scss';

const ExtendedSearch = ({ setFilterProperty, propertyStore, visible }) => {
  const generateFilter = filterProperty =>
    filterProperty.map(property => (
      <Range
        setProperty={setFilterProperty}
        property={property}
        propertyStore={propertyStore}
        key={uuid()}
      />
    ));

  return (
    <article className={`extended-search${visible ? ' show-filter' : ''}`}>
      <h2>Filter</h2>
      {generateFilter(FILTER_PROPERTY)}
    </article>
  );
};

ExtendedSearch.propTypes = {
  propertyStore: PropTypes.objectOf(PropTypes.string),
  setFilterProperty: PropTypes.func.isRequired,
};

ExtendedSearch.defaultProps = {
  propertyStore: {},
};

export default ExtendedSearch;
