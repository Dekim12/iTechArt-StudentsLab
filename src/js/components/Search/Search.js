import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../index';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchQuery = '';
  }

  addSearchQuery = event => {
    const currentValue = event.target.value;
    this.searchQuery = currentValue.replace(/^\s+|\s+$/g, '');
  };

  sendRequest = event => {
    event.preventDefault();
    const { onSearchPatternChange, resetFilterData } = this.props;

    resetFilterData();

    if (this.searchQuery) {
      onSearchPatternChange(this.searchQuery);
    }
  };

  componentWillUnmount = () => {
    const { resetSearchData, resetFilterData } = this.props;
    resetFilterData();
    resetSearchData();
  };

  render() {
    return (
      <article className='search'>
        <form className='search-form' onSubmit={this.sendRequest}>
          <input
            type='text'
            placeholder='Search beers...'
            maxLength='50'
            onChange={this.addSearchQuery}
          />
        </form>
        <Button className='button-for-search' makeChanges={this.sendRequest}>
          <i className='fa fa-search' aria-hidden='true' />
        </Button>
      </article>
    );
  }
}

Search.propTypes = {
  onSearchPatternChange: PropTypes.func.isRequired,
  resetFilterData: PropTypes.func.isRequired,
  resetSearchData: PropTypes.func.isRequired,
};

export default Search;
