import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HomePage, FavoritesPage } from '../index';
import { Header } from '../../components';
import './App.scss';

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
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
