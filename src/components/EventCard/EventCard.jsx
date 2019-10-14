import React from 'react';
import {Link} from 'react-router-dom';
import './EventCard.css';

function EventCard({event, handleDeleteEvent, user}) { 
  let year = '';
  let month = '';
  let day = '';
  let timeStr='';
  let eventTime = '';
  console.log(event.creatorId);
  console.log(user._id);
  let isUser = event.creatorId === user._id ? false : true;
  function newDate(event) {
    let dateArr = event.date.split('-');
    year = dateArr[0];
    month = dateArr[1];
    day = dateArr[2].split('T')[0];
    timeStr=dateArr[2].split('T')[1];
    return year, month, day, timeStr;
  };
  function getTime(str) {
    let timeArr = timeStr.split(':');
    let hour = parseInt(timeArr[0]) - 7;
    let minute = timeArr[1];
    if (hour < 0) {
      hour = hour + 24;
    } 
    if (hour >= 12){
      if (hour === 12){
      return eventTime = '12:' + minute + ' PM'
      }
      else return eventTime = (hour - 12) + ':' + minute + ' PM';
    }
    else if (hour === 0){
      return '12:' + minute + 'AM';
    }
    else return eventTime = hour + ':' + minute + ' AM';

  }
  newDate(event);
  getTime(timeStr);
  return (
    <div className='card-container'>
      <div className="card-heading">
        <h3 className='card-title'>{event.name}</h3>
      </div>
      <div className='card-body'>
        <dl>
          <dt><strong>Created By: </strong> {event.creatorName}</dt>
          <dt><strong>Date:</strong> {month}/{day}/{year}</dt>
          <dt><strong>Time:</strong> {eventTime}</dt>
          <dt><strong>Location</strong> {event.location}</dt>
          <dt><strong>Details</strong></dt>
          <dd>{event.details}</dd>
        </dl>
      </div>
      <div hidden={isUser} className='panel-footer'>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/event/edit',
            state: {event}
          }}
        >
         <button className='header-footer'>Edit</button> 
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteEvent(event._id)}
        >
          <strong>Delete</strong>
        </button>
      </div>
    </div>
  );
}

export default EventCard;