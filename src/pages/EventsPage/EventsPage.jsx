import React from 'react';
import EventCard from '../../components/EventCard/EventCard';

function EventsPage(props) {
  return (
    <>
      <h1>Event List</h1>
      <div className='eventlist'>
        {props.event.map(event =>
          <EventCard
            key={event._id}
            event={event}
            handleDeleteEvent={props.handleDeleteEvent}
          />
        )}
      </div>
    </>
  );
}

export default EventsPage;