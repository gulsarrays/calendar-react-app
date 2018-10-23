import React from 'react';
import TimeLine from './timeLine';
import Events from './events';
import calendarEvents_new from '../services/reformatCalendarData';
import Header from './header';
import Footer from './footer';

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
      <Header />
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
      <Footer />
    </React.Fragment>
  );
};

export default EventCalendar;
