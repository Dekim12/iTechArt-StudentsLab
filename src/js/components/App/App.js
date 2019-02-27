import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FavoritesPage, Header, Spinner } from '../index';
import {
  MenuContainer,
  SearchPageContainer,
  BeerPageContainer,
} from '../../redux/containers';
import './app.scss';

class App extends Component {
  componentDidMount = () => {
    const { asyncApiRequest } = this.props;
    asyncApiRequest();
  };

  render() {
    const { isLoading } = this.props;

    return (
      <BrowserRouter>
        <section className='app'>
          <Header />
          <main className='content'>
            <Route exact path='/' component={SearchPageContainer} />
            <Route path='/favorite' component={FavoritesPage} />
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
  asyncApiRequest: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  isLoading: true,
  data: [],
};

export default App;
