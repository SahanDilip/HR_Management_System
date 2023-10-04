import React, { useState } from 'react';
import Navbar2 from '../Navbar2';

export default function AdminLoginPage() {
  // State to store the entered username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your login logic
    // For this example, we'll just display the entered username and password
    // alert(`Username: ${username}\nPassword: ${password}`);
    window.location.href = '/AdminUser';
  };

  return (
    <div>
      <Navbar2/>
    <div className='LoginInput'>
      <form onSubmit={handleSubmit}>
        <div className='UserPass'>
          <div className='input-container'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type='submit' onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </div>
  );
}
