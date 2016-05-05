import React, { PropTypes } from 'react';
import Navigation from './Navigation';

const App = (props) => (
  <div id="app">
    <Navigation />
    <div id="content">
      {props.children}
    </div>
  </div>
);

App.propTypes = { children: PropTypes.object };

export default App;
