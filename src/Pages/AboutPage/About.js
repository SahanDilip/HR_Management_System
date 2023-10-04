import React from 'react';
import './About.css';
import Navbar2 from '../Navbar2';

export default function About() {
  return (
    <div className='creaters'>
      <Navbar2/>
      <center>
        <h1>Jupiter</h1>
        <h2>Human Resource Management System</h2>
        <div className='aboutdetails'>
          <p className="Type01">Created By</p>
          <p className="Type01">Group 9</p>
          <p className="Type01">Batch 21</p>
          <p className="Type01">Department of Computer Science & Engineering</p>
          <p className="Type01">University of Moratuwa</p>
          <p className="Type01">-----------</p>
          <p className="Type01">210180L - SANJULA GATHSARA</p>
          <p className="Type01">210196P - SAHAN GUNATHUNGA</p>
          <p className="Type01">210201F - SITHIKA GURUGE</p>
          <p className="Type01">210277P - DILRANGI SANKALPANA</p>
          <p className="Type01">210396E - SASHINI MUNASINGHE</p>
        </div>
      </center>
    </div>
  );
}
