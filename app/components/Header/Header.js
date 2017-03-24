import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './header.css';

class Header extends React.Component {
  render() {
    return(
      <div id='Header'>
        <div id="pageTitle">
        	<h1>Header Component</h1>
        </div>
        
        <Nav />
      </div>
    );

  }
}

export default Header;