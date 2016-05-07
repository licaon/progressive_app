import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Photos from './components/Photos';
import Comments from './components/Comments';
import About from './components/About';
import NotFound from './components/NotFound';
import React from 'react';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="photos" component={Photos} />
    <Route path="comments" component={Comments} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
