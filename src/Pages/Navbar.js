import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='Home'>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
      <div className='About'>
        <Link to='/About'>
          <button>About</button>
        </Link>
      </div>
      <div className='Logout'>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
}
