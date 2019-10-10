import React, { Component } from "react";
//import logo from '../../logo.svg';
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import userService from "../utils/userService";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventPage from "../pages/EventPage/EventPage";
import eventService from "../utils/eventService";
import MainPage from "../pages/MainPage/MainPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      event: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  // handleCreateEvent = () => {
  //   this.setState({event: eventService.getEvent()});
  // }

  handleUpdateEvents = (event) => {
    this.setState({event});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Hit Me Up!</header>
        <Switch>
          <Route
            exact
            path="/events"
            
            render={() => (
              userService.getUser() ?

              <MainPage
                event={this.state.event}
                handleUpdateEvents={this.handleUpdateEvents}
              />
              :
              <Redirect to='/login' />
            )}
          />
          <Route
            exact
            path="/eventadd"
            render={({ history }) => (
              <EventPage
                event={this.state.event}
                history={history}
                handleCreateEvent={this.handleCreateEvent}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <NavBar
                event={this.state.event}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
