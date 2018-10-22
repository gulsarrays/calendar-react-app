import React from 'react';
import BusyTimeSlot from './busyTimeSlot';
import FreeTimeSlot from './freeTimeSlot';

const TimeSlot = ({ event, start, end, height }) => {
  // return <FreeTimeSlot height={height} />;
  if (event === undefined) {
    return <FreeTimeSlot height={height} />;
  } else {
    return (
      <BusyTimeSlot event={event} start={start} end={end} height={height} />
    );
  }
};

export default TimeSlot;
