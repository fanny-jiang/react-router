import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from '../react/components/Albums';
import Album from '../react/components/Album';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/albums" component={Albums} />
      <IndexRedirect to="/albums" />
    </Route>
  </Router>
), document.getElementById('app'));


