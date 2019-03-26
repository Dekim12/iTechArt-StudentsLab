import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Button, ExtendedSearch } from '../index';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
    };

    this.searchQuery = '';
    this.property = {};
  }

  addSearchQuery = event => {
    const currentValue = event.target.value;
    this.searchQuery = currentValue.replace(/^\s+|\s+$/g, '');
  };

  sendRequest = event => {
    event.preventDefault();
    const { onSearchPatternChange } = this.props;

    if (this.searchQuery || Object.keys(this.property).length) {
      onSearchPatternChange(this.searchQuery, this.property);
    }
  };

  componentWillUnmount = () => {
    const { resetSearchData } = this.props;

    this.property = {};
    this.setState({ filter: false });
    resetSearchData();
  };

  showFilter = () => {
    if (!this.state.filter) {
      this.setState({ filter: true });
    }
  };

  setFilterProperty = (type, value) => {
    this.property[type] = value;
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <article className='search'>
          <form className='search-form' onSubmit={this.sendRequest}>
            <input
              type='text'
              placeholder={t('input_placeholder')}
              maxLength='50'
              onChange={this.addSearchQuery}
              onFocus={this.showFilter}
            />
          </form>
          <Button className='button-for-search' makeChanges={this.sendRequest}>
            <i className='fa fa-search' aria-hidden='true' />
          </Button>
        </article>
        <ExtendedSearch
          propertyStore={this.property}
          setFilterProperty={this.setFilterProperty}
          visible={this.state.filter}
        />
      </Fragment>
    );
  }
}

Search.propTypes = {
  onSearchPatternChange: PropTypes.func.isRequired,
  resetSearchData: PropTypes.func.isRequired,
};

export default withTranslation()(Search);
