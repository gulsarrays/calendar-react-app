import React from 'react';

const BusyTimeSlot = ({ event, start, end, height }) => {
  let topMargin = 0;
  let bottomMargin = 0;

  if (start.includes(':30')) {
    topMargin = 50;
  }
  if (end.includes(':30')) {
    bottomMargin = -50;
  }

  const styles = {
    background: 'red',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: height,
    marginTop: topMargin + 'px',
    marginBottom: bottomMargin + 'px'
  };

  return (
    <li style={styles} className="align-middle">
      {height} - {event} - {start} - {end}
    </li>
  );
};

export default BusyTimeSlot;
