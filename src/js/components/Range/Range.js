import React from 'react';
import PropTypes from 'prop-types';
import './range.scss';

class Range extends React.Component {
  state = {
    rangeValue: this.props.propertyStore[this.props.property.type] || null,
  };

  handleChange = event => {
    const { value } = event.target;
    const { setProperty, property } = this.props;

    setProperty(property.type, value);
    this.setState({ rangeValue: value });
  };

  render() {
    const { property } = this.props;
    const { rangeValue } = this.state;

    return (
      <div className='range'>
        <p>{property.name}</p>
        <label>
          <input
            className='input-range'
            type='range'
            min={property.min}
            max={property.max}
            value={rangeValue || property.middle}
            onChange={this.handleChange}
            step={property.step}
          />
          <span className='range-value'>{rangeValue || property.middle}</span>
        </label>
      </div>
    );
  }
}

Range.propTypes = {
  property: PropTypes.objectOf(PropTypes.any),
  propertyStore: PropTypes.objectOf(PropTypes.string),
  setProperty: PropTypes.func.isRequired,
};

Range.defaultProps = {
  property: {},
  propertyStore: {},
};

export default Range;
