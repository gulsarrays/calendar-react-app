import React from 'react';
import linkedin from '../images/social_linkedin.png';
import facebook from '../images/social_facebook.png';
import twitter from '../images/social_twitter.png';

const Footer = () => {
  return (
    <div className="cd-footer columns footer-class">
      <div className="column is-3 is-offset-1">
        <ul>
          <li>COMPANY</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="column is-3">
        <ul>
          <li>HELP</li>
          <li>How it works</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="column is-3">
        <ul>
          <li>LEGALITIES</li>
          <li>Privacy</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <div className="column is-3 footer-class-img">
        <p>CONNECT WITH US</p>
        <img src={linkedin} alt="linkedin" width="35px" height="35px" />
        <img src={facebook} alt="facebook" width="35px" height="35px" />
        <img src={twitter} alt="twitter" width="35px" height="35px" />
      </div>
    </div>
  );
};

export default Footer;
