import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

/* --- Public Components --- */
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import FloatingBtns from './components/FloatingBtns';
import ProtectedRoute from './components/ProtectedRoute';

/* --- Public Pages --- */
import Home from './pages/Home';
import About from './pages/About';
import PregnancyChart from './pages/PregnancyChart';
import Login from './pages/Login';

/* --- Admin Pages --- */
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import AddUser from './pages/admin/AddUser';
import EditUser from './pages/admin/EditUser';
import ManageAppointments from './pages/admin/ManageAppointments';
import ManageContacts from './pages/admin/ManageContacts';

import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Routes>
      {/* 1. Public Facing Website */}
      <Route path="/" element={
        <>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          <Header toggleMobileMenu={toggleMobileMenu} />
          <Home />
          <Footer />
          <FloatingBtns />
        </>
      } />
      
      <Route path="/about" element={
        <>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          <Header toggleMobileMenu={toggleMobileMenu} />
          <About />
          <Footer />
          <FloatingBtns />
        </>
      } />

      <Route path="/pregnancy-chart" element={
        <>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          <Header toggleMobileMenu={toggleMobileMenu} />
          <PregnancyChart />
          <Footer />
          <FloatingBtns />
        </>
      } />

      <Route path="/login" element={
        <>
          <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
          <Header toggleMobileMenu={toggleMobileMenu} />
          <Login />
          <Footer />
        </>
      } />

      {/* 2. Secured Admin Panel Layout */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} /> {/* default config */}
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/edit/:id" element={<EditUser />} />
        <Route path="appointments" element={<ManageAppointments />} />
        <Route path="contacts" element={<ManageContacts />} />
      </Route>

    </Routes>
  );
}

export default App;
