// import React, { Component } from 'react';
// import ApiCalendar from 'react-google-calendar-api';

import React, { ReactNode, SyntheticEvent, Component } from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, name) {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
      ApiCalendar.setCalendar('gcommong@gmail.com');

      if (ApiCalendar.sign) {
        ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
          console.log(result.items);
        });
      }
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }

  render() {
    return (
      <div className="columns logo column is-4" style={{ paddingLeft: '30px' }}>
        <button onClick={e => this.handleItemClick(e, 'sign-in')}>
          sign-in
        </button>
        {'      '}
        <button onClick={e => this.handleItemClick(e, 'sign-out')}>
          sign-out
        </button>
      </div>
    );
  }
}
