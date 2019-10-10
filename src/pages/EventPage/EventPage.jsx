import React, { Component } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import eventService from '../../utils/eventService';

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  // async componentDidMount() {
  //   const event = await eventService.index();
  //   console.log('mounted');
  //   this.props.handleUpdateEvents(event);
  // }


    



  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    // const events = this.props.event.map((event) => (
    //   <tr >
    //     <td>{event.name}</td>
    //     <td>{event.date}</td>
    //     <td>{event.details}</td>
    //   </tr>
    // ));
    return (


      
      <div className='EventPage'>
        <EventForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
        <p>{events}</p>
      </div>
    );
  }
}

export default EventPage;