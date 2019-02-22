import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, HashRouter } from 'react-router-dom';
import { FavoritesPage, SearchPage, Header, Spinner } from '../index';
import { MenuContainer } from '../../redux/containers';
import './app.scss';

class App extends Component {
  componentDidMount = () => {
    const { asyncApiRequest } = this.props;
    asyncApiRequest();
  };

  render() {
    const { isLoading } = this.props;
    return (
      <HashRouter>
        <section className='app'>
          <Header />
          <main className='content'>
            <Route exact path='/' component={SearchPage} />
            <Route path='/favorite' component={FavoritesPage} />
          </main>
          <MenuContainer />
          <Spinner indicator={isLoading} />
        </section>
      </HashRouter>
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
