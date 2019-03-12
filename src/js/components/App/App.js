import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Spinner } from '../index';
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
    const { isLoading } = this.props;

    return (
      <BrowserRouter>
        <section className='app'>
          <Header />
          <main className='content'>
            <Route exact path='/' component={SearchPageContainer} />
            <Route path='/favorite' component={FavoritePageContainer} />
            <Route path='/beer/:id' component={BeerPageContainer} />
          </main>
          <MenuContainer />
          <Spinner indicator={isLoading} />
        </section>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  getAllBeers: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoading: true,
};

export default App;
