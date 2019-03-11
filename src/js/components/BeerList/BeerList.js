import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import InfiniteScrollList from '../InfiniteScrollList/InfiniteScrollList';
import { BeerLabelContainer } from '../../redux/containers';
import './beerList.scss';

class BeerList extends InfiniteScrollList {
  constructor() {
    super();

    this.listRef = React.createRef();
  }

  observeScroll = () => {
    const { getNextBeerPage, toggleNextPageLoading } = this.props;
    const lastBeer = this.listRef.current.lastChild;
    super.isNeedToLoadMoreItems(
      lastBeer,
      getNextBeerPage,
      toggleNextPageLoading
    );
  };

  shouldComponentUpdate = nextProps => {
    const { data } = this.props;
    super.checkNewProps(data, nextProps.data);
    return true;
  };

  generateItemsList = items =>
    items.map(elem => (
      <BeerLabelContainer
        url={elem.image_url}
        name={elem.name}
        tagline={elem.tagline}
        id={elem.id}
        key={uuid()}
      />
    ));

  render() {
    const { data, nextPageLoading } = this.props;
    const scroll = super.isNeedScroll(nextPageLoading);

    return (
      <article className='beer-list'>
        <div className='beer-items-list' ref={this.listRef}>
          {data.length ? this.generateItemsList(data) : null}
        </div>
        {scroll}
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