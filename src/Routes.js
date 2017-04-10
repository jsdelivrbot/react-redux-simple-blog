import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostHome from './components/PostHome';

const Greeting = () => {
  return <div>Hello there!</div>;
}

const GoodBye = () => {
  return <div>See ya!</div>;
}

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ PostHome } />
    <Route path='greeting' component={ Greeting } />
    <Route path='goodbye' component={ GoodBye } />
  </Route>
)
