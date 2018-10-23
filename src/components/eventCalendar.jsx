import React from 'react';
import TimeLine from './timeLine';
import Events from './events';
import calendarEvents_new from '../services/reformatCalendarData';

const EventCalendar = props => {
  const mondayEvents = calendarEvents_new.monday;
  const tuesdayEvents = calendarEvents_new.tuesday;
  const wednesdayEvents = calendarEvents_new.wednesday;
  const thursdayEvents = calendarEvents_new.thursday;
  const fridayEvents = calendarEvents_new.friday;
  const saturdayEvents = calendarEvents_new.saturday;
  const sundayEvents = calendarEvents_new.sunday;

  return (
    <React.Fragment>
      {/* <div style={{ align: 'center' }}>
        <h4> Event Calender</h4>
      </div> */}
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
