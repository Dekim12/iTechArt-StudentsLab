import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../index';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchQuery = '';
    this.buttonContent = <i className='fa fa-search' aria-hidden='true' />;
  }

  addSearchQuery = event => {
    const currentValue = event.target.value;
    this.searchQuery = currentValue.replace(/^\s+|\s+$/g, '');
  };

  sendRequest = event => {
    const { setData } = this.props;
    event.preventDefault();
    if (this.searchQuery) {
      setData(this.searchQuery);
    }
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
        <Button
          content={this.buttonContent}
          className='button-for-search'
          makeChanges={this.sendRequest}
        />
      </article>
    );
  }
}

Search.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default Search;
