import moment from 'moment';
const calendarEvents = [];
calendarEvents.push([]);
calendarEvents.push([]);
calendarEvents.push([]);
calendarEvents.push([]);
calendarEvents.push([]);
calendarEvents.push([]);
calendarEvents.push([]);

function calculateHrs(start, end) {
  const start_date = moment(start, 'YYYY-MM-DD HH:mm:ss');
  const end_date = moment(end, 'YYYY-MM-DD HH:mm:ss');
  const duration = moment.duration(end_date.diff(start_date));
  return duration.asHours();
}

function calculateHeight(start, end) {
  return calculateHrs(start, end) * 100;
}

calendarEvents[0].push(
  {
    event: 'Teachers Meeting - 1',
    day: 'Monday',
    start: '2018-03-11T09:30:00+05:30',
    end: '2018-03-11T10:00:00+05:30',
    startTime: moment('2018-03-11T09:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-11T10:00:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T09:30:00+05:30', '2018-03-11T10:00:00+05:30'),
    height: calculateHeight(
      '2018-03-11T09:30:00+05:30',
      '2018-03-11T10:00:00+05:30'
    )
  },
  {
    event: 'Teachers Meeting - 2',
    day: 'Monday',
    start: '2018-03-11T10:30:00+05:30',
    end: '2018-03-11T12:30:00+05:30',
    startTime: moment('2018-03-11T10:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-11T12:30:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T10:30:00+05:30', '2018-03-11T12:30:00+05:30'),
    height: calculateHeight(
      '2018-03-11T10:30:00+05:30',
      '2018-03-11T12:30:00+05:30'
    )
  },
  {
    event: 'Parents Meeting - 3',
    day: 'Monday',
    start: '2018-03-11T12:30:00+05:30',
    end: '2018-03-11T14:00:00+05:30',
    startTime: moment('2018-03-11T12:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-11T14:00:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T12:30:00+05:30', '2018-03-11T14:00:00+05:30'),
    height: calculateHeight(
      '2018-03-11T12:30:00+05:30',
      '2018-03-11T14:00:00+05:30'
    )
  },
  {
    event: 'Teachers Meeting - 4',
    day: 'Monday',
    start: '2018-03-11T15:30:00+05:30',
    end: '2018-03-16T16:00:00+05:30',
    startTime: moment('2018-03-11T15:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-16T16:00:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T15:30:00+05:30', '2018-03-11T16:00:00+05:30'),
    height: calculateHeight(
      '2018-03-11T15:30:00+05:30',
      '2018-03-11T16:00:00+05:30'
    )
  },
  {
    event: 'Teachers Meeting - 4',
    day: 'Monday',
    start: '2018-03-11T16:30:00+05:30',
    end: '2018-03-16T18:00:00+05:30',
    startTime: moment('2018-03-11T16:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-16T18:00:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T16:30:00+05:30', '2018-03-11T18:00:00+05:30'),
    height: calculateHeight(
      '2018-03-11T16:30:00+05:30',
      '2018-03-11T18:00:00+05:30'
    )
  }
);

calendarEvents[1].push({
  event: 'Teachers Meeting - 1',
  day: 'Tuesday',
  start: '2018-03-11T16:00:00+05:30',
  end: '2018-03-11T17:30:00+05:30',
  startTime: moment('2018-03-11T16:00:00+05:30').format('HH:mm'),
  endTime: moment('2018-03-11T17:30+05:30').format('HH:mm'),
  hrs: calculateHrs('2018-03-11T16:00:00+05:30', '2018-03-11T17:30:00+05:30'),
  height: calculateHeight(
    '2018-03-11T16:00:00+05:30',
    '2018-03-11T17:30:00+05:30'
  )
});
calendarEvents[2].push(
  {
    event: 'Teachers Meeting - 1',
    day: 'Wednesday',
    start: '2018-03-11T10:30:00+05:30',
    end: '2018-03-11T12:30:00+05:30',
    startTime: moment('2018-03-11T10:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-11T12:30:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T10:30:00+05:30', '2018-03-11T12:30:00+05:30'),
    height: calculateHeight(
      '2018-03-11T10:30:00+05:30',
      '2018-03-11T12:30:00+05:30'
    )
  },
  {
    event: 'Teachers Meeting - 1',
    day: 'Wednesday',
    start: '2018-03-11T14:30:00+05:30',
    end: '2018-03-11T16:30:00+05:30',
    startTime: moment('2018-03-11T14:30:00+05:30').format('HH:mm'),
    endTime: moment('2018-03-11T16:30:00+05:30').format('HH:mm'),
    hrs: calculateHrs('2018-03-11T14:30:00+05:30', '2018-03-11T16:30:00+05:30'),
    height: calculateHeight(
      '2018-03-11T14:30:00+05:30',
      '2018-03-11T16:30:00+05:30'
    )
  }
);
calendarEvents[3].push({
  event: 'Teachers Meeting - 1',
  day: 'Thursday',
  start: '2018-03-11T11:30:00+05:30',
  end: '2018-03-11T12:30:00+05:30',
  startTime: moment('2018-03-11T11:30:00+05:30').format('HH:mm'),
  endTime: moment('2018-03-11T12:30:00+05:30').format('HH:mm'),
  hrs: calculateHrs('2018-03-11T11:30:00+05:30', '2018-03-11T12:30:00+05:30'),
  height: calculateHeight(
    '2018-03-11T11:30:00+05:30',
    '2018-03-11T12:30:00+05:30'
  )
});

calendarEvents[4].push({
  event: 'Teachers Meeting - 1',
  day: 'Friday',
  start: '2018-03-11T16:30:00+05:30',
  end: '2018-03-11T17:30:00+05:30',
  startTime: moment('2018-03-11T16:30:00+05:30').format('HH:mm'),
  endTime: moment('2018-03-11T17:30:00+05:30').format('HH:mm'),
  hrs: calculateHrs('2018-03-11T16:30:00+05:30', '2018-03-11T17:30:00+05:30'),
  height: calculateHeight(
    '2018-03-11T16:30:00+05:30',
    '2018-03-11T17:30:00+05:30'
  )
});

calendarEvents[5].push({
  event: 'Teachers Meeting - 1',
  day: 'Saturday',
  start: '2018-03-11T00:00:00+05:30',
  end: '2018-03-11T02:30:00+05:30',
  startTime: moment('2018-03-11T00:00:00+05:30').format('HH:mm'),
  endTime: moment('2018-03-11T02:30:00+05:30').format('HH:mm'),
  hrs: calculateHrs('2018-03-11T00:00:00+05:30', '2018-03-11T02:30:00+05:30'),
  height: calculateHeight(
    '2018-03-11T00:00:00+05:30',
    '2018-03-11T02:30:00+05:30'
  )
});
calendarEvents[6].push({
  event: 'Teachers Meeting - 1',
  day: 'Sunday',
  start: '2018-03-11T22:30:00+05:30',
  end: '2018-03-12T00:00:00+05:30',
  startTime: moment('2018-03-11T22:30:00+05:30').format('HH:mm'),
  endTime: moment('2018-03-12T00:00:00+05:30').format('HH:mm'),
  hrs: calculateHrs('2018-03-11T22:30:00+05:30', '2018-03-12T00:00:00+05:30'),
  height: calculateHeight(
    '2018-03-11T22:30:00+05:30',
    '2018-03-12T00:00:00+05:30'
  )
});

export default calendarEvents;
