import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import uuid from 'uuid/v1';
import { Range } from '../index';
import { FILTER_PROPERTY } from '../../constants';
import './extendedSearch.scss';

const ExtendedSearch = ({ setFilterProperty, propertyStore, visible }) => {
  const { t } = useTranslation();

  const generateFilter = filterProperty =>
    filterProperty.map(property => (
      <Range
        setProperty={setFilterProperty}
        property={property}
        propertyStore={propertyStore}
        name={t(property.name)}
        key={uuid()}
      />
    ));

  return (
    <article className={`extended-search${visible ? ' show-filter' : ''}`}>
      <h2>{t('filter')}</h2>
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
