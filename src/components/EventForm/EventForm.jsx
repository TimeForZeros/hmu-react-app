import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import userService from '../../utils/userService';
import eventService from '../../utils/eventService';

class EventForm extends Component {

  state = {
    name: '',
    date: '',
    location: '',
    details: '',
    // creator:'',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await eventService.create(this.state);
      this.props.handleCreate();
      console.log(this.props.event);
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await userService.signup(this.state);
  //     this.props.handleSignupOrLogin();
  //     console.log(this.props.user);
  //      this.props.history.push('/');
  //   } catch (err) {
  //     // Invalid user data (probably duplicate email)
  //     this.props.updateMessage(err.message);
  //   }
  // }

  
  isFormInvalid() {
    return !(this.state.name);
  }
  // isFormInvalid() {
  //   return !(this.state.name && this.state.date && this.state.details);
  // }

  render() {
    return (
      <div>
        <header className="header-footer">Create Event</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Event Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="datetime-local" className="form-control" placeholder="mm/dd/yyyy" value={this.state.date} name="date" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Create</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EventForm;
