import React, { Component } from 'react';

class EventForm extends Component {

  state = {
    invalidForm: true,
    formData: {
    name: '',
    date: '',
    location: '',
    details: '',
    // creator: this.props.user.Schema.Types.ObjectId
  }
  };


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
            type='datetime-local'
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

    );
  }
}

export default EventForm;
