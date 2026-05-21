import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
// Pages - Double check these file names in your sidebar!
import Home from './pages/Home';
import About from './pages/About';
import HvacService from './pages/Hvac';  // Change this if your file is named Hvac.jsx
import FireService from './pages/Fire';  // Change this if your file is named Fire.jsx
import MaintenanceService from './pages/MaintenanceService'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Ventilation from './pages/Ventilation';
import AirConditioning from './pages/AirConditioning';
import MechanicalServices from './pages/MechanicalServices';
import TestingCommissioning from './pages/TestingCommissioning';
import Insulation from './pages/Insulation';
function App() {
  return (
    <Router>
      {/* Ensures page starts at top when navigating */}
      <ScrollToTop /> 
      
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <Navbar />
        
        {/* This main tag holds the unique content for every page */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/hvac" element={<HvacService />} />
            <Route path="/services/fire" element={<FireService />} />
            <Route path="/services/maintenance" element={<MaintenanceService />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/ventilation" element={<Ventilation />} />
            <Route path="/services/air-conditioning" element={<AirConditioning />} />
            <Route path="/services/mechanical-engineering" element={<MechanicalServices />} />
            <Route path="/services/testing-commissioning" element={<TestingCommissioning />} />
            <Route path="/services/insulation" element={<Insulation />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;