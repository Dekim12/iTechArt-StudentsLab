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
    const { getNextPage, startLoading } = this.props;
    this.scrolling = false;
    this.currentPage += 1;
    startLoading();
    getNextPage(this.currentPage);
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
    const { visualData } = this.props;
    if (visualData.length < nextProps.visualData.length) {
      this.scrolling = true;
    }
    return true;
  };

  generateItemsList = items =>
    items.map(elem => <BeerLabel data={elem} key={uuid()} />);

  render() {
    const { visualData, pageLoading } = this.props;

    return (
      <article className='beer-list' ref={this.listRef}>
        <div className='beer-items-list'>
          {visualData.length ? this.generateItemsList(visualData) : null}
        </div>
        {pageLoading ? (
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
  visualData: PropTypes.arrayOf(PropTypes.object),
  getNextPage: PropTypes.func.isRequired,
  pageLoading: PropTypes.bool,
};

BeerList.defaultProps = {
  visualData: [],
  pageLoading: false,
};

export default BeerList;
