import React from 'react';
import TimeSlot from './timeSlot';
import moment from 'moment';
import { isUndefined } from 'util';

const Events = ({ eventsData }) => {
  const timeArry = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  let propLoop = 0;
  let componentArr = [];
  //for (let i = 0; i < 8; i++) {
  for (let i = 0; i < 24; i++) {
    if (!isUndefined(eventsData[propLoop])) {
      const eventStatrtTime = moment(eventsData[propLoop].start)
        .format('HH:mm')
        .toString();

      const hrStart = timeArry[i].toString();
      const hrEnd = timeArry[i + 1].toString();

      if (eventStatrtTime >= hrStart && eventStatrtTime < hrEnd) {
        componentArr.push(
          <TimeSlot
            key={'event_' + i}
            event={eventsData[propLoop].event}
            start={eventsData[propLoop].startTime}
            end={eventsData[propLoop].endTime}
            day={eventsData[propLoop].day}
            height={eventsData[propLoop].height}
            px
          />
        );
        const internalLoop = Math.ceil(eventsData[propLoop].height / 100);

        for (let j = 1; j < internalLoop; j++) {
          componentArr.push(
            <TimeSlot
              key={'event_' + (i + '_' + j)}
              day={eventsData[propLoop].day}
              height="0px"
            />
          );
          i++;
        }
        propLoop = propLoop + 1;
      } else {
        let tmpHeight = '100px';
        // if (eventsData[propLoop].height < 100) {
        //   tmpHeight = eventsData[propLoop].height + 'px';
        //   tmpHeight = 0 + 'px';
        //   console.log(tmpHeight);
        // }
        // console.log(eventsData[propLoop].height);
        componentArr.push(
          <TimeSlot
            key={'else_event_' + i}
            day={eventsData[propLoop].day}
            height={tmpHeight}
          />
        );
      }
    }
  }

  const Component = (
    <li className="events-group">
      <div className="top-info">
        <span>
          <b>{eventsData[0].day}</b>
        </span>
      </div>
      <ul>{componentArr}</ul>
    </li>
  );

  return <div>{Component}</div>;
};

export default Events;
