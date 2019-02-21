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
        <section className='app'>
          <Header />
          <main className='content'>
            <Route exact path='/' component={HomePage} />
            <Route path='/favorite' component={FavoritesPage} />
            <Route path='/search' component={SearchPage} />
          </main>
          <MenuContainer />
        </section>
      </HashRouter>
    );
  }
}

export default App;
