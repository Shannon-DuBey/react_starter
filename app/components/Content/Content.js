import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, IndexRoute } from 'react-router-dom';
import Headline from '../Headline/Headline';
import Main from '../Main/Main';
import AboutMe from '../../pages/AboutMe';
import ContactMe from '../../pages/ContactMe';

import './content.css';

class Content extends React.Component {
  render() {
    return(
		<div id='Content'>
			
			<div id="contentArea">
				{this.props.children}
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/about_me" component={AboutMe} />
					<Route path="/contact_me" component={ContactMe} />
				</Switch>
			</div>
			
		</div>
    );
  }
}

export default Content;