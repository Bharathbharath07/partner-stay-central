
import React, { useState } from 'react';
import Sidebar from '@/components/Layout/Sidebar';
import DashboardOverview from './DashboardOverview';
import RoomInventory from '@/components/Rooms/RoomInventory';
import TourBookings from '@/components/Bookings/TourBookings';
import HotelListings from '@/components/Listings/HotelListings';
import PartnerMessages from '@/components/Messages/PartnerMessages';

const HotelPartnerDashboard = ({ hotelData, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview hotelData={hotelData} />;
      case 'listings':
        return <HotelListings />;
      case 'inventory':
        return <RoomInventory />;
      case 'bookings':
        return <TourBookings />;
      case 'messages':
        return <PartnerMessages />;
      default:
        return <DashboardOverview hotelData={hotelData} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={onLogout}
        hotelName={hotelData?.hotelName}
      />
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default HotelPartnerDashboard;
