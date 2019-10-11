import React, { Component } from 'react';
import EventForm from '../../components/EventForm/EventForm';

class EventAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

    



  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (


      
      <div className='EventAdd'>
        <EventForm {...this.props} user={this.props.user} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventAdd;