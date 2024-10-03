import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './Mainpage'
import Dashboard from './components/adminDashboard/Dashboard'
import Departments from './components/adminDashboard/Departments';
import Analytics from './components/adminDashboard/Analytics';
import Totaltickets from './components/adminDashboard/Dashboardfiles/Totaltickets';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
