import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { BeerLabel } from '../index';
import './beerList.scss';

class BeerList extends React.Component {
  constructor(props) {
    super(props);

    this.currentPage = 1;
    this.scrolling = false;
    this.listRef = React.createRef();
  }

  loadMoreBeer = () => {
    const { getNextBeerPage, toggleNextPageLoading } = this.props;
    this.scrolling = false;
    this.currentPage += 1;
    toggleNextPageLoading();
    getNextBeerPage(this.currentPage);
  };

  observeScroll = () => {
    const lastBeer = this.listRef.current.lastChild;
    const lastBeerOffset = lastBeer.offsetTop + lastBeer.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastBeerOffset) {
      if (this.scrolling) {
        this.loadMoreBeer();
      }
    }
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.observeScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.observeScroll);
  };

  shouldComponentUpdate = nextProps => {
    const { data } = this.props;
    if (data.length < nextProps.data.length) {
      this.scrolling = true;
    }
    return true;
  };

  generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  render() {
    const { data, nextPageLoading } = this.props;

    return (
      <article className='beer-list' ref={this.listRef}>
        <div className='beer-items-list'>
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
