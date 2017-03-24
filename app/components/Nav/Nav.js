import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  render(){
    return(
		<div id="NavBar">
			<Link to="/">Main</Link>
			<Link to="/about_me">About Me</Link>
			<Link to="/contact_me">Contact Me</Link>
		</div>
    );
  }
}



export default Nav;