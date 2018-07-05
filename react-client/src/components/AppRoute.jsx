
import React from "react";
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
import $ from 'jquery';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
// import { BrowserHistory } from 'react-history';
import ItemsList from './ItemsList.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Lend from './AddItems.jsx';
import Search from './Search.jsx';
import Session from './Session.jsx';
import Profile from './profile.jsx';



// npm install --save react-router
// npm install --save react-router-dom
// npm install --save history (for html history)
// npm install --save react-history (install hashHistory and browserHistory)
// npm install react-dev (install bundle.js for webpack server)
// npm start (start my React app)
// npm install --save react-bootstrap
// npm install --save react-browser-router

const AppRoute = () => (

      <BrowserRouter history={hashHistory}>
      <Switch>
         <Route exact path="/" component={Register} />
         <Route exact path="/ItemsList" component={ItemsList} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Register} />
         <Route exact path="/search" component={Search} />
         <Route exact path="/addItems" component={Lend} />
         <Route exact path="/session" component={Session} />
         <Route exact path="/profile" component={Profile} />

         </Switch>
      </BrowserRouter>


);

export default AppRoute;
