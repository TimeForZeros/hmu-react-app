import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import './EventsPage.css';

function EventsPage(props) {
  return (
    <>
      <h1>Event List</h1>
      <div className='events-page'>
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