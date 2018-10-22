import React from 'react';
import TimeLine from './timeLine';
import Events from './events';
import calendarEvents from '../fetchCalendarData';

const EventCalendar = props => {
  const mondayEvents = calendarEvents[0];
  const tuesdayEvents = calendarEvents[1];
  const wednesdayEvents = calendarEvents[2];
  const thursdayEvents = calendarEvents[3];
  const fridayEvents = calendarEvents[4];
  const saturdayEvents = calendarEvents[5];
  const sundayEvents = calendarEvents[6];

  console.log(sundayEvents);

  return (
    <React.Fragment>
      <div className="cd-schedule loading">
        <TimeLine />

        <div className="events">
          <ul>
            <Events day="Monday" eventsData={mondayEvents} />
            <Events day="Tuesday" eventsData={tuesdayEvents} />
            <Events day="Wednesday" eventsData={wednesdayEvents} />
            <Events day="Thursday" eventsData={thursdayEvents} />
            <Events day="Friday" eventsData={fridayEvents} />
            <Events day="Saturday" eventsData={saturdayEvents} />
            <Events day="Sunday" eventsData={sundayEvents} />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventCalendar;
