import React from 'react';
import {Link} from 'react-router-dom';

function EventCard({event, handleDeleteEvent}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{event.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Date</dt>
          <dd>{event.date}</dd>
          <dt>Location</dt>
          <dd>{event.location}</dd>
          <dt>Details</dt>
          <dd>{event.details}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/event/edit',
            state: {event}
          }}
        >
          Edit
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteEvent(event._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;