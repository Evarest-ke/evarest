// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Loading, { useLoadingTimer } from '../Loading/Loading';

function AppRouter() {
  const loading = useLoadingTimer(2000);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;