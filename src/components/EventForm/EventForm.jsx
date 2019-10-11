import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import eventService from '../../utils/eventService';

class EventForm extends Component {

  state = {
    invalidForm: true,
    formData: {
    name: '',
    date: '',
    location: '',
    details: '',
    creator: this.props.user.Schema.Types.ObjectId
  }
  };

  // handleChange = (e) => {
  //   this.props.updateMessage('');
  //   this.setState({
  //     // Using ES2015 Computed Property Names
  //     [e.target.name]: e.target.value
  //   });
  // }

  formRef = React.createRef();

handleChange = e => {
  const formData = {...this.state.formData, [e.target.name]: e.target.value};
  this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
  });
};


  handleSubmit = e => {
    e.preventDefault();
    this.props.handleCreateEvent(this.state.formData);
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await eventService.create(this.state);
  //     this.props.handleCreate();
  //     console.log(this.props.event);
  //     this.props.history.push('/');
  //   } catch (err) {
  //     this.props.updateMessage(err.message);
  //   }
  // }

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

  
  // isFormInvalid() {
  //   return !(this.state.name);
  // }

  render() {
    return (

      <>
      <h1>Create Event</h1>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            className="form-control"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="form-control"
            name="date"
            value={this.state.formData.date}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            className="form-control"
            name="location"
            value={this.state.formData.location}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Details</label>
          <input
            className="form-control"
            name="details"
            value={this.state.formData.details}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={this.state.invalidForm}
        >
          Create Event
        </button>
      </form>
    </>


      // <div>
      //   <header className="header-footer">Create Event</header>
      //   <form className="form-horizontal" onSubmit={this.handleSubmit} >
      //     <div className="form-group">
      //       <div className="col-sm-12">
      //         <input type="text" className="form-control" placeholder="Event Name" value={this.state.formData.name} name="name" onChange={this.handleChange} />
      //       </div>
      //     </div>
      //     <div className="form-group">
      //       <div className="col-sm-12">
      //         <input type="datetime-local" className="form-control" placeholder="mm/dd/yyyy" value={this.state.date} name="date" onChange={this.handleChange} />
      //       </div>
      //     </div>
      //     <div className="form-group">
      //       <div className="col-sm-12">
      //         <input type="text" className="form-control" placeholder="details" value={this.state.details} name="details" onChange={this.handleChange} />
      //       </div>
      //     </div>
      //     <div className="form-group">
      //       <div className="col-sm-12 text-center">
      //         <button className="btn btn-default" disabled={this.state.invalidForm}>Create</button>&nbsp;&nbsp;
      //         <Link to='/'>Cancel</Link>
      //       </div>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default EventForm;
