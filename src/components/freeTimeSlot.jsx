import React from 'react';

const FreeTimeSlot = props => {
  const styles = {
    marginTop: '0px',
    marginBottom: '0px',
    border: '0px Solid',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: props.height
  };

  return (
    <li style={styles} className="align-middle">
      {''}
    </li>
  );
};

export default FreeTimeSlot;
