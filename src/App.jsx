import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import HvacService from './pages/Hvac'; 
import FireService from './pages/Fire'; 
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
      {/* Handles both Scrolling to top AND updating the Browser Tab Title */}
      <ScrollToTop /> 
      
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-blue-100">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Technical Service Pages - Paths aligned with Navbar links */}
            <Route path="/services/hvac" element={<HvacService />} />
            <Route path="/services/fire" element={<FireService />} />
            <Route path="/services/ventilation" element={<Ventilation />} />
            <Route path="/services/air-conditioning" element={<AirConditioning />} />
            <Route path="/services/insulation" element={<Insulation />} />
            <Route path="/services/mechanical-engineering" element={<MechanicalServices />} />
            <Route path="/services/testing-commissioning" element={<TestingCommissioning />} />
            <Route path="/services/maintenance" element={<MaintenanceService />} />
            
            {/* Fallback for safety (Optional) */}
            <Route path="/services/fire" element={<FireService />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;