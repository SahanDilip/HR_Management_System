import React from 'react';
import Navbar2 from '../Navbar2';


const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your login logic
    // For this example, we'll just display the entered username and password
    // alert(`Username: ${username}\nPassword: ${password}`);
    window.location.href = '/AdminUser';
  };

export default function AdminUser() {
  return (
    <>
    
    <div className='creaters'>
    <Navbar2/>
      
      <center>
        <div className='aboutdetails'>
          <p className="Type01">Adminpage is here</p>
          <button type='View my details' onClick={handleSubmit}>Login</button>
        </div>
      </center>
    </div>
   
    </>
  );
}
