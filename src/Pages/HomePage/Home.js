import React from 'react';
import HRImage from './HRImage.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar2';

export default function Home() {
  return (
    <div className='backound'>
          <Navbar2/>
          <center>
          <h1>Jupiter Human Resourse Management System</h1>
          <div className='image'>
            <img src={HRImage} alt="Description of your image" className="image-container" />
          </div>
          </center>
          <div className='footer'>
          <Link to='Employeelog'>
            <button>Employee User</button>
          </Link>
          <Link to ='AdminLoginPage'>
            <button>Admin User</button>
          </Link>
          </div>
    </div>
  )
}
