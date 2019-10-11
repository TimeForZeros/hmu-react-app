import React, { Component } from "react";
//import logo from '../../logo.svg';
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import * as eventAPI from "../utils/event-api";
import NavBar from "../components/NavBar/NavBar";
import userService from "../utils/userService";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventAdd from "../pages/EventAdd/EventAdd";
// import eventService from "../utils/eventService";
import MainPage from "../pages/MainPage/MainPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import EditEventPage from '../pages/EditEventPage/EditEventPage';

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

  handleCreateEvent = async newEventData => {
    const newEvent = await eventAPI.create(newEventData);
    this.setState(
      state => ({
        event: [...state.event, newEvent],
        user: this.state.user
      }),
      () => this.props.history.push("/")
    );
  };

  handleUpdateEvent = async updateEventData => {
    const updateEvent = await eventAPI.update(updateEventData);
    const newEventArray = this.state.event.map(e =>
      e._id === updateEvent._id ? updateEvent : e
    );
    this.setState({ event: newEventArray }, () => this.props.history.push("/"));
  };

  handleDeleteEvent = async id => {
    await eventAPI.deleteOne(id);
    this.setState(
      state => ({
        event: state.event.filter(e => e._id !== id)
      }),
      () => this.props.history.push("/")
    );
  };

  async componentDidMount() {
    const event = await eventAPI.getAll();
    this.setState({event});
  }

  // handleCreateEvent = () => {
  //   this.setState({event: eventService.getEvent()});
  // }

  // handleUpdateEvents = (event) => {
  //   this.setState({event});
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">Hit Me Up!</header>
        <NavBar
          event={this.state.event}
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>
          <Route
            exact
            path="/event"
            render={() =>
              userService.getUser() ? (
                <EventsPage
                  event={this.state.event}
                  handleDeleteEvent={this.handleDeleteEvent}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/event/add"
            render={({ history }) => (
              <EventAdd
                user={this.state.user}
                history={history}
                handleCreateEvent={this.handleCreateEvent}
              />
            )}
          />
          {/* <Route
            exact
            path="/"
            render={() => (
              <NavBar
                event={this.state.event}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          /> */}
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
          <Route
            exact
            path="/event/edit"
            render={({ history, location }) => (
              <EditEventPage
                handleUpdateEvent={this.handleUpdateEvent}
                location={location}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
