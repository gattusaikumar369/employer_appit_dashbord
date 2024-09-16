
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component

import Job from './components/Job'
import Dashbord from './components/Dashord'
import  CreditsAndUsage from './components/CreditsAndUsage'
import Billing from './components/Billing'
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <div className='route-cnt'>
        <Dashbord/>
        <Routes>
         
          <Route exact path="/job" element={<Job />} />
          <Route exact path="/creditsusage" element={<CreditsAndUsage/>}/>
          <Route exact path="/billing" element={<Billing/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App
