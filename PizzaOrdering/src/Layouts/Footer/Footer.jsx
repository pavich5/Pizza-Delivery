import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='card'>
        <h2 className='motto'>
          OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
        </h2>
      </div>
      <div className='card'>
        <h1 className='title'>FIND OUR RESTAURANTS</h1>
        <p className='text'>
          1654 R. Don Road #304.
          <br /> New York, 85022
          <br /> (602) 867-1010
        </p>
        <p className='text'>
          2356 K. Laquie Rd #235.
          <br /> New York, 85022
          <br /> (602) 867-1011
        </p>
        <p className='text'>
          1614 E. Erwin St #104.
          <br /> New York, 85022
          <br /> (602) 867-1012
        </p>
        <p className='text'>
          1614 W. Caroll St #125.
          <br /> New York, 85022
          <br /> (602) 867-1013
        </p>
      </div>
      <div className='card'>
        <h1 className='title'>WORKING HOURS</h1>
        <p className='text'>
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className='text'>
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  );
};

export default Footer;