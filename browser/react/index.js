import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
    </Route>
  </Router>
), document.getElementById('app'));
