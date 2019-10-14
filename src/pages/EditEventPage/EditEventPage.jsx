import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditEventPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.event
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateEvent(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Event</h1>
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
            <label>Event Date</label>
            <input
              className="form-control"
              name="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Event Location</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Event Details</label>
            <input
              className="form-control"
              name="details"
              value={this.state.formData.details}
              onChange={this.handleChange}
            />
          {/* <div className='form-group'>
            <label >Going?</label>
            <input
            className='form-control'
            name='contributors'
            value={this.state.formData.contributors} 
            /> */}
          </div>
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            Save Event
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditEventPage;