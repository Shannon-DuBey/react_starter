import './style.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import fetch from 'better-fetch';
fetch.setDefaultHeaders({
	Authorization: 'Token token=${GlobalTokenValue}',
	Accept: "application/json.v2"
});

import { Layout } from './components';

const app = document.getElementById('app');
render(
	<Router>
		<Layout />
	</Router>,
	app
);
