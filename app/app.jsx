var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// ES5 Syntax:
/*
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
*/
//ES6:
// called "destructuring"
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation-sites
// style! and css! are the loaders we installed for webpack
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component = {Main} >
			<Route path="about" component={About} />
			<Route path="examples" component={Examples} />
			<IndexRoute component = {Weather} />
		</Route>
	</Router>,
	document.getElementById('app')
);
