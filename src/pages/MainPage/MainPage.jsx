import React, { Component } from 'react';
import eventService from '../../utils/eventService';
import userService from '../../utils/userService';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  async componentDidMount() {
    const event = await eventService.index();
    this.props.handleUpdateEvents(event);
  }
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    const event = this.props.event.map((event, idx) => (
        <tr key={idx}>
        <td>{event.name}</td>
        <td>{event.date}</td>
        <td>{event.details}</td>
      </tr>
    ));
    return (
    //   <div className="placeholder">
    //       <div>{events}</div>
    //   </div>
    <div>
    {this.props.event.length ? 
        <table className='placeholder'>
          <tbody>
            {event}
          </tbody>
        </table>
        :
        <h4 className='text-info'>No Events Yet</h4>
      }
      </div>


    );
  }
}

export default MainPage;