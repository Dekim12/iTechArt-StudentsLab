import React from 'react';

class InfiniteScrollList extends React.Component {
  constructor(props) {
    super(props);

    this.currentPage = 1;
    this.scrolling = false;

    this.addListener = this.addListener.bind(this);
    this.removeListener = this.removeListener.bind(this);
  }

  addListener = () => {
    window.addEventListener('scroll', this.observeScroll);
  };

  removeListener = () => {
    window.removeEventListener('scroll', this.observeScroll);
  };

  loadMoreBeer(getNextPage) {
    this.scrolling = false;
    this.currentPage += 1;
    getNextPage(this.currentPage);
  }

  observeScroll(lastBeer, getNextPage, toggleLoading) {
    const lastBeerOffset = lastBeer.offsetTop + lastBeer.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastBeerOffset) {
      if (this.scrolling) {
        toggleLoading();
        this.loadMoreBeer(getNextPage);
      }
    }
  }

  checkNewProps(currentList, nextList) {
    if (currentList.length < nextList.length) {
      this.scrolling = true;
    }
  }
}

export default InfiniteScrollList;
