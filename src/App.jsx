import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Homepage
import Home from './pages/Home';

// User dashboard
import Dashboard from './pages/Userdashboard';

// Login or Logout
import Login from './pages/Login';
import Signup from './pages/Signup';

// Organization routes
import President from './organization/President';
import VicePresident from './organization/Vicepresident';
import GeneralSecretary from './organization/Generalsecretary';
import Treasurer from './organization/Treasurer';

// Media page
import Media from './pages/Media';


///about page 
import About from './pages/About';

import Organization from './components/Organization';


//objectives page 
import Objectives from './pages/Objectives';



function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/home" element={<Home />} />

         {/* About route */}
         <Route path="/about" element={<About />} />


          {/* Organization route */}
          <Route path="/organization" element={<Organization />} />


        {/* User dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Signup />} />

        {/* Organization routes */}
        <Route path="/president" element={<President />} />
        <Route path="/vicepresident" element={<VicePresident />} />
        <Route path="/generalsecretary" element={<GeneralSecretary />} />
        <Route path="/treasurer" element={<Treasurer />} />

        {/* Media route */}
        
        <Route path="/media" element={<Media />} />




        {/* Media route */}
        
        <Route path="/objectives" element={<Objectives />} />


      </Routes>
    </Router>
  );
}

export default App;
