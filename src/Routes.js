import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostHome from './components/PostHome';
import NewPost from './components/NewPost';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ PostHome } />
    <Route path='posts/new' component={ NewPost } />
  </Route>
);
