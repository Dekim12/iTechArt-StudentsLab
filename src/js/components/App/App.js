import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HomePage, FavoritesPage, SearchPage, Header } from '../index';
import { MenuContainer } from '../../redux/containers';
import './app.scss';

class App extends Component {
  state = {};

  render() {
    return (
      <HashRouter>
        <div className='app'>
          <Header />
          <div className='content'>
            <Route exact path='/' component={HomePage} />
            <Route path='/favorite' component={FavoritesPage} />
            <Route path='/search' component={SearchPage} />
          </div>
          <MenuContainer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
