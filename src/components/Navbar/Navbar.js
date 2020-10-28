import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <div className="main-menu">
    <Link to="/" className="link">Home</Link>
    <Link to="/" className="link">Catalogue</Link>
    <Link to="/" className="link">About</Link>
  </div>
);
export default Navbar;
