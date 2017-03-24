import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Layout } from './components';

const app = document.getElementById('app');
render(
	<Router>
		<Layout />
	</Router>,
	app
);
