import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './main.css';

import Headline from '../Headline/Headline';

class Main extends React.Component {
  render() {
    return(
		<div id='Main'>
			<Headline text="This is the Main Component" />


		</div>
    );
  }
}

export default Main;
