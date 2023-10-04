import './App.css';
import Home from './Pages/HomePage/Home.js';
import About from './Pages/AboutPage/About';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employeelog from './Pages/EmployeeLoginPage/Employeelog';
import AdminLoginPage from './Pages/AdminLoginPage/AdminLoginPage';
import UserPage from './Pages/UserPage/UserPage';
import AdminUser from './Pages/AdminUserPage/AdminUser';
import EmployeeDetails from './Pages/EmployeeDetailsPage/EmployeeDetails';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Employeelog" element ={<Employeelog/>}/> 
        <Route path="/AdminLoginPage" element ={<AdminLoginPage/>}/>
        <Route path="/UserPage" element ={<UserPage/>}/>
        <Route path="/AdminUser" element ={<AdminUser/>}/>
        <Route path="/EmployeeDetails" element ={<EmployeeDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

 