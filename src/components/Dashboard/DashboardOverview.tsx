
import React from 'react';
import { Building2, Users, Calendar, TrendingUp, MapPin, Star } from 'lucide-react';

interface DashboardOverviewProps {
  hotelData: any;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ hotelData }) => {
  const stats = [
    {
      title: 'Tour Bookings',
      value: '23',
      change: '+8 this week',
      icon: Calendar,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Available Rooms',
      value: '18',
      change: 'Out of 45 total',
      icon: Building2,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Monthly Revenue',
      value: '₹2,45,000',
      change: '+15% vs last month',
      icon: TrendingUp,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Guest Rating',
      value: '4.8',
      change: 'Based on 156 reviews',
      icon: Star,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const recentTourBookings = [
    { 
      id: 1, 
      tourName: 'Golden Triangle Tour', 
      guests: 4, 
      checkIn: '2024-06-15', 
      nights: 3,
      status: 'confirmed',
      travelAgent: 'Dream Travels'
    },
    { 
      id: 2, 
      tourName: 'Kerala Backwaters', 
      guests: 2, 
      checkIn: '2024-06-18', 
      nights: 2,
      status: 'pending',
      travelAgent: 'Royal Tours'
    },
    { 
      id: 3, 
      tourName: 'Rajasthan Heritage', 
      guests: 6, 
      checkIn: '2024-06-20', 
      nights: 4,
      status: 'confirmed',
      travelAgent: 'Elite Expeditions'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Partner Dashboard</h2>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{hotelData?.location}</span>
        </div>
      </div>

      {/* Hotel Status Card */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Welcome back, {hotelData?.hotelName}!
            </h3>
            <p className="text-muted-foreground">
              Your hotel is active on TravelMax platform. Partner ID: {hotelData?.partnerId}
            </p>
          </div>
          <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
            Active Partner
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-card-foreground mt-1">{stat.value}</p>
                  <p className="text-sm mt-1 text-muted-foreground">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Tour Bookings */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">Recent Tour Bookings</h3>
          <p className="text-sm text-muted-foreground">Bookings from travel agents and tour packages</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentTourBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{booking.tourName}</p>
                    <p className="text-sm text-muted-foreground">
                      by {booking.travelAgent} • {booking.guests} guests • {booking.nights} nights
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-card-foreground font-medium">{booking.checkIn}</p>
                  <span className={`status-badge ${
                    booking.status === 'confirmed' ? 'status-approved' : 'status-pending'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
