import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar2';

const handleSubmit = (e) => { 
  e.preventDefault();
//   const navigate = useNavigate();
//  navigate('/EmployeeDetails');
window.location.href = '/EmployeeDetails'; }



export default function UserPage() {

  

 
  return (
    <div className='creaters'>
    <Navbar2/>
      
      <center>
        <div className='aboutdetails'>
          <p className="Type01">UserDetails is here </p>
          <div>
            <button type='Viewmydetails' onClick={handleSubmit}>View my Details</button>
          </div>
        </div>
      </center>
    </div>
   
    
  );
}
