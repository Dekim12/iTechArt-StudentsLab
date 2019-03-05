import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { BeerLabel } from '../index';
import './beerList.scss';

const BeerList = ({ visualData }) => {
  const generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  return (
    <article className='search-result'>
      {visualData.length ? generateItemsList(visualData) : null}
    </article>
  );
};

BeerList.propTypes = {
  visualData: PropTypes.arrayOf(PropTypes.object),
};

BeerList.defaultProps = {
  visualData: [],
};

export default BeerList;
