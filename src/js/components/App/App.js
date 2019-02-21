import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { FavoritesPage, SearchPage, Header } from '../index';
import { MenuContainer } from '../../redux/containers';
import './app.scss';

class App extends Component {
  state = {};

  componentDidMount = () => {
    this.props.asyncApiRequest();
  };

  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <section className='app'>
          <Header />
          <main className='content'>
            <Route exact path='/' component={SearchPage} />
            <Route path='/favorite' component={FavoritesPage} />
          </main>
          <MenuContainer />
        </section>
      </HashRouter>
    );
  }
}

export default App;
