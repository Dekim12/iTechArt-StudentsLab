import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import InfiniteScrollList from '../InfiniteScrollList/InfiniteScrollList';
import { BeerLabel } from '../index';
import './beerList.scss';

class BeerList extends InfiniteScrollList {
  constructor() {
    super();

    this.listRef = React.createRef();
  }

  observeScroll = () => {
    const { getNextBeerPage, toggleNextPageLoading } = this.props;
    const lastBeer = this.listRef.current.lastChild;
    super.observeScroll(lastBeer, getNextBeerPage, toggleNextPageLoading);
  };

  componentDidMount = () => {
    this.addListener();
  };

  componentWillUnmount = () => {
    this.removeListener();
  };

  shouldComponentUpdate = nextProps => {
    const { data } = this.props;
    super.checkNewProps(data, nextProps.data);
    return true;
  };

  generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  render() {
    const { data, nextPageLoading } = this.props;

    return (
      <article className='beer-list'>
        <div className='beer-items-list' ref={this.listRef}>
          {data.length ? this.generateItemsList(data) : null}
        </div>
        {nextPageLoading ? (
          <div className='infinite-loading'>
            <div className='circle-child' />
            <div className='circle-child' />
            <div className='circle-child' />
          </div>
        ) : null}
      </article>
    );
  }
}

BeerList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  getNextBeerPage: PropTypes.func.isRequired,
  toggleNextPageLoading: PropTypes.func.isRequired,
  nextPageLoading: PropTypes.bool,
};

BeerList.defaultProps = {
  data: [],
  nextPageLoading: false,
};

export default BeerList;
