
import React, { useState } from 'react';
import LoginForm from '@/components/Auth/LoginForm';
import HotelPartnerDashboard from '@/components/Dashboard/HotelPartnerDashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hotelData, setHotelData] = useState(null);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Simulate successful login with mock hotel data
    setHotelData({
      hotelName: 'Grand Palace Hotel',
      location: 'Mumbai, India',
      partnerId: 'HTL001',
      email: credentials.email
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setHotelData(null);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <HotelPartnerDashboard hotelData={hotelData} onLogout={handleLogout} />;
};

export default Index;
