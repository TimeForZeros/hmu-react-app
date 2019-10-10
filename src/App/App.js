import React, { Component } from "react";
//import logo from '../../logo.svg';
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import userService from  '../utils/userService';
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventPage from '../pages/EventPage/EventPage';
import eventService from "../utils/eventService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      event: ''
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  };

  handleCreateEvent = () => {
    this.setState({event: eventService.getEvent()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Hit Me Up!</header>
        <Switch>
          <Route exact path='/eventadd' render={({history}) =>
          <EventPage 
            history={history}
            handleCreateEvent={this.handleCreateEvent}
           />} />
         <Route exact path="/"  render={() => <NavBar 
         user={this.state.user}
         handleLogout={this.handleLogout}
         />} />
         <Route exact path="/signup"  render={({history}) => <SignupPage
                       history={history}
                       handleSignupOrLogin={this.handleSignupOrLogin} />} />
         <Route exact path='/login' render={({history})=> <LoginPage
                       history={history}
                       handleSignupOrLogin={this.handleSignupOrLogin} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
