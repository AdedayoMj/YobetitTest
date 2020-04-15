import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Main/components/Navbar";
import HomePage from "./components/Main/components/HomePage";
import SignIn from "./components/Main/components/SignIn";
import SignUp from "./components/Main/components/SignUp";
import ErrorPage from "./components/Main/components/ErrorPage";
import PrivateRoute from "./RouteProtected";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./components/Main/modules/auth";
import store from "./store/createStore";

import AllCountriesArray from "./components/RestCountries/AllCountriesArray";
import SearchByName from "./components/RestCountries/SearchByName";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/all-countries" component={AllCountriesArray} />
            <Route path="/search" component={SearchByName} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
