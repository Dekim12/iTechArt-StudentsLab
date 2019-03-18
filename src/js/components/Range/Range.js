import React from 'react';
import PropTypes from 'prop-types';
import './range.scss';

const Range = ({
  beer,
  filterSearchResult,
  property,
  changeRangePosition,
  position,
}) => {
  const handleChange = event => {
    const { value } = event.target;

    changeRangePosition(property.type, value);
    filterSearchResult(beer, property.type, value);
  };

  return (
    <div className='range'>
      <p>{property.name}</p>
      <label>
        <input
          className='input-range'
          type='range'
          min={property.min}
          max={property.max}
          value={position || property.middle}
          onChange={handleChange}
          step={property.step}
        />
        <span className='range-value'>{position || property.middle}</span>
      </label>
    </div>
  );
};

Range.propTypes = {
  property: PropTypes.objectOf(PropTypes.any),
  beer: PropTypes.arrayOf(PropTypes.object),
  filterSearchResult: PropTypes.func.isRequired,
  changeRangePosition: PropTypes.func.isRequired,
  position: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Range.defaultProps = {
  property: {},
  beer: [],
  position: null,
};

export default Range;
