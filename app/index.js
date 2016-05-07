import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

const container = document.createElement('div');
container.setAttribute('id', 'container');

document.body.appendChild(container);

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), container);
