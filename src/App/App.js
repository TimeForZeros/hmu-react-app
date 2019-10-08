import React, { Component } from "react";
//import logo from '../../logo.svg';
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";

class App extends Component {
  constructor() {
    super();
  }

  // handleLogout = () => {
  //   userService.logout();
  //   this.setState({user: null});
  // };

  // handleSignupOrLogin = () => {
  //   this.setState({user: userService.getUser()});
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">Hit Me Up!</header>
        <Switch>
         <Route exact path="/"  render={() => <NavBar />} />
         <Route exact path="/signup"  render={() => <SignupPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
