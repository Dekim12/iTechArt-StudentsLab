import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Spinner, ToUpButton, Error } from '../index';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {
  MenuContainer,
  SearchPageContainer,
  BeerPageContainer,
  FavoritePageContainer,
} from '../../redux/containers';
import './app.scss';

class App extends Component {
  componentDidMount = () => {
    const { getAllBeers } = this.props;
    getAllBeers();
  };

  render() {
    const { isLoading, isError, errorToggle } = this.props;

    return (
      <BrowserRouter>
        <ScrollToTop>
          <section className='app'>
            <Header />
            <main className='content'>
              <Route exact path='/' component={SearchPageContainer} />
              <Route path='/favorite/:id' component={FavoritePageContainer} />
              <Route path='/beer/:id' component={BeerPageContainer} />
            </main>
            <MenuContainer />
            <Spinner indicator={isLoading} />
            <ToUpButton />
            <Error isError={isError} toggle={errorToggle} />
          </section>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  getAllBeers: PropTypes.func.isRequired,
  errorToggle: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoading: true,
  isError: false,
};

export default App;
