import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from '../react/components/Albums';
import Album from '../react/components/Album';
import Artists from '../react/components/Artists';
import Artist from '../react/components/Artist';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="albums/:albumId" component={Album} />
      <Route path="/artists" component={Artists} />
      <Route path="artists/:artistId" component={Artist} />
    </Route>
  </Router>
), document.getElementById('app'));
