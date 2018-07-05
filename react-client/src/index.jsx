
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
// import { BrowserHistory } from 'react-history';
// import Home from './components/Home.jsx';
// import Login from './components/login.jsx';
// import Register from './components/register.jsx';
// import Lend from './components/addItems.jsx';
// import Search from './components/search.jsx';
import AppRoute from './components/AppRoute.jsx';



// npm install --save react-router
// npm install --save react-router-dom
// npm install --save history (for html history)
// npm install --save react-history (install hashHistory and browserHistory)
// npm install react-dev (install bundle.js for webpack server)
// npm start (start my React app)
// npm install --save react-bootstrap
// npm install --save react-browser-router

class App extends React.Component {
  render() {
    return (
		<div>
			<AppRoute />
		</div>
      );
  }
}
ReactDOM.render(<App />, window.document.getElementById("app"))
