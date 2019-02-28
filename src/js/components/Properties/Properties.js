import React from 'react';
import PropTypes from 'prop-types';
import './properties.scss';

const Properties = ({ abv, ibu, ebc }) => {
  const floorValue = value => value && value.toFixed(1);

  return (
    <div className='prop-list-wrapper'>
      <h2>Properties</h2>
      <ul className='list beer-properties'>
        <li>
          <span className='prop-value'>{floorValue(abv)}</span>
          <div className='info-label'>
            <i className='fa fa-info-circle' aria-hidden='true' />
            <span className='tooltip'>Alcohol By Volume</span>
          </div>
          <span className='abbreviation'>ABV</span>
        </li>
        <li>
          <span className='prop-value'>{floorValue(ibu)}</span>
          <div className='info-label'>
            <i className='fa fa-info-circle' aria-hidden='true' />
            <span className='tooltip'>International Bitterness Units</span>
          </div>
          <span className='abbreviation'>IBU</span>
        </li>
        <li>
          <span className='prop-value'>{floorValue(ebc)}</span>
          <div className='info-label'>
            <i className='fa fa-info-circle' aria-hidden='true' />
            <span className='tooltip'>European Brewery Convention</span>
          </div>

          <span className='abbreviation'>EBC</span>
        </li>
      </ul>
    </div>
  );
};

Properties.propTypes = {
  abv: PropTypes.number,
  ibu: PropTypes.number,
  ebc: PropTypes.number,
};

Properties.defaultProps = {
  abv: 0,
  ibu: 0,
  ebc: 0,
};

export default Properties;
