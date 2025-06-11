
import React, { useState } from 'react';
import LoginForm from '@/components/Auth/LoginForm';
import SignupForm from '@/components/Auth/SignupForm';
import HotelPartnerDashboard from '@/components/Dashboard/HotelPartnerDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hotelData, setHotelData] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (credentials) => {
    // Simulate successful login with mock hotel data
    setHotelData({
      hotelName: 'Grand Palace Hotel',
      location: 'Mumbai, India',
      partnerId: 'HTL001',
      email: credentials.email
    });
    setIsLoggedIn(true);
  };

  const handleSignup = (signupData) => {
    // Simulate successful signup and auto-login
    setHotelData({
      hotelName: signupData.hotelName,
      location: 'Mumbai, India',
      partnerId: 'HTL' + Math.floor(Math.random() * 1000),
      email: signupData.email,
      contactPerson: signupData.contactPerson,
      phone: signupData.phone
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setHotelData(null);
    setShowSignup(false);
  };

  const switchToSignup = () => {
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
  };

  if (!isLoggedIn) {
    if (showSignup) {
      return <SignupForm onSignup={handleSignup} onSwitchToLogin={switchToLogin} />;
    }
    return <LoginForm onLogin={handleLogin} onSwitchToSignup={switchToSignup} />;
  }

  return <HotelPartnerDashboard hotelData={hotelData} onLogout={handleLogout} />;
};

export default Index;
