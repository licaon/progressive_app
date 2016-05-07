import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <div id="navigation">
    <Link to="/" activeClassName="active">Home</Link>
    <Link to="/photos" activeClassName="active">Photos</Link>
    <Link to="/comments" activeClassName="active">Comments</Link>
    <Link to="/about" activeClassName="active">About Us</Link>
  </div>
);

export default Navigation;
