import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => (
  <header>
    <div className="logo-wrapper">
      <h1 className="logo">
        <Link to="/">
          Green Planet
        </Link>
      </h1>
    </div>
    <Navbar />
  </header>
);

export default Header;
