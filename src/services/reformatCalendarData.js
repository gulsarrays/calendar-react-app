import eventObj from './gcal';

import moment from 'moment';
import { isArray } from 'util';

function calculateHrs(start, end) {
  const start_date = moment(start, 'YYYY-MM-DD HH:mm:ss');
  const end_date = moment(end, 'YYYY-MM-DD HH:mm:ss');
  const duration = moment.duration(end_date.diff(start_date));
  return duration.asHours();
}

function calculateHeight(start, end) {
  return calculateHrs(start, end) * 100;
}

const calendarEvents_new = {
  monday: { day: 'Monday' },
  tuesday: { day: 'Tuesday' },
  wednesday: { day: 'Wednesday' },
  thursday: { day: 'Thursday' },
  friday: { day: 'Friday' },
  saturday: { day: 'Saturday' },
  sunday: { day: 'Sunday' }
};

Object.keys(eventObj).forEach(function(key) {
  let obj = eventObj[key];
  if (isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      obj[i]['startTime'] = moment(obj[i].start).format('HH:mm');
      obj[i]['endTime'] = moment(obj[i].end).format('HH:mm');
      obj[i]['hrs'] = calculateHrs(obj[i].start, obj[i].end);
      obj[i]['height'] = calculateHeight(obj[i].start, obj[i].end);
    }
  } else {
    obj['startTime'] = moment(obj.start).format('HH:mm');
    obj['endTime'] = moment(obj.end).format('HH:mm');
    obj['hrs'] = calculateHrs(obj.start, obj.end);
    obj['height'] = calculateHeight(obj.start, obj.end);
  }
  calendarEvents_new[key] = eventObj[key];
});

export default calendarEvents_new;
