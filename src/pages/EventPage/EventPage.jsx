import React, { Component } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import eventService from '../../utils/eventService';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

    



  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (


      
      <div className='EventPage'>
        <EventForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventPage;