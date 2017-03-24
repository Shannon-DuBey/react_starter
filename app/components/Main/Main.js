import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Headline from '../Headline/Headline';
import './main.css';

class Main extends React.Component {
  render() {
    return(
		<div id='Main'>
			<Headline text="This is the Main Page Content" />
		</div>
    );
  }
}

export default Main;