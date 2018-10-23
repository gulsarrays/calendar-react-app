import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <div>
      <div className="columns logo">
        <div className="column is-4">
          <img src={logo} alt="logo" className="header-logo" />
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          verticalAlign: 'center',
          color: 'white',
          paddingTop: '30px'
        }}
        className="cd-schedule loading header-class"
      >
        <h2>Weekly Event Calender</h2>
      </div>
    </div>
  );
};

export default Header;
