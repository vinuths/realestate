import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import About from './pages/About';


import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddProject from './pages/Admin/AddProject';
import AdminProjects from './components/AdminProjects'; // Adjust path if needed
import EditProject from './components/EditProject'; // adjust path

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddProject />} />     
<Route path="/admin/projects" element={<AdminProjects />} />

<Route path="/admin/edit/:id" element={<EditProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
