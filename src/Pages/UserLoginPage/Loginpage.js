import React from 'react'
import Navbar from '../Navbar'
import './Loginpage.css';

 //for admins
export default function Loginpage() {
  return (
    <div className='LoginInput'>
      <Navbar/>
        <div className='UserPass'>
            <h1>Username</h1>
            <h1>Passowrd</h1>
        </div>
    </div>
  )
}
