import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </nav>
    );
  }
}
