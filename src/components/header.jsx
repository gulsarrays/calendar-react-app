//import React from 'react';
import React, { Component } from 'react';
import logo from '../images/logo.png';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const responseGoogle = response => {
//   console.log(response);
// };
// const Header = () => {
//   return (
//     <div>
//       <div className="columns logo">
//         <div className="column is-4">
//           <img src={logo} alt="logo" className="header-logo" />
//         </div>
//       </div>
//       <div
//         style={{
//           textAlign: 'center',
//           verticalAlign: 'center',
//           color: 'white',
//           paddingTop: '30px'
//         }}
//         className="cd-schedule loading header-class"
//       >
//         <h2>Weekly Event Calender</h2>
//       </div>
//       <div className="columns logo column is-4" style={{ paddingLeft: '30px' }}>
//         <GoogleLogin
//           clientId="120719995264-ak61nj4tfbaigmp9gvtih8e7d8sc9dlf.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//         />{' '}
//       </div>
//     </div>
//   );
// };

class Header extends Component {
  state = {
    loggedInStatus: false
  };

  responseGoogle = response => {
    if (response.accessToken !== undefined) {
      this.setState({
        loggedInStatus: true
      });
    }
    console.log('response', response.accessToken);
  };
  logout = () => {
    this.setState({
      loggedInStatus: false
    });
    console.log('logout');
  };

  render() {
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
        <div
          className="columns logo column is-4"
          style={{ paddingLeft: '30px' }}
        >
          {this.state.loggedInStatus ? (
            <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} />
          ) : (
            <GoogleLogin
              clientId="120719995264-aak61nj4tfbaigmp9gvtih8e7d8sc9dlf.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Header;

// export default Header;
