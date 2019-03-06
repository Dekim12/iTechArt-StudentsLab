import React from 'react';
import './infiniteScrollList.scss';

class InfiniteScrollList extends React.Component {
  constructor(props) {
    super(props);

    this.currentPage = 1;
    this.scrolling = false;
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.observeScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.observeScroll);
  };

  loadMoreItem(getNextPage) {
    this.scrolling = false;
    this.currentPage += 1;
    getNextPage(this.currentPage);
  }

  isNeedToLoadMoreItems(lastItem, getNextPage, toggleLoading) {
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastItemOffset) {
      if (this.scrolling) {
        toggleLoading();
        this.loadMoreItem(getNextPage);
      }
    }
  }

  isNeedScroll(isLoading) {
    if (isLoading) {
      return (
        <div className='infinite-loading'>
          <div className='circle-child' />
          <div className='circle-child' />
          <div className='circle-child' />
        </div>
      );
    }
    return null;
  }

  checkNewProps(currentList, nextList) {
    if (currentList.length < nextList.length) {
      this.scrolling = true;
    }
  }
}

export default InfiniteScrollList;
