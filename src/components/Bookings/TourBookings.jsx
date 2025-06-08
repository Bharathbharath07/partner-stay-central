
import React, { useState } from 'react';
import { Calendar, Users, MapPin, CheckCircle, XCircle, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TourBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      tourName: 'Golden Triangle Tour',
      travelAgent: 'Dream Travels',
      guestCount: 4,
      checkIn: '2024-06-15',
      checkOut: '2024-06-18',
      nights: 3,
      roomsRequired: 2,
      totalAmount: 45000,
      status: 'pending',
      bookingDate: '2024-06-01',
      contactPerson: 'Raj Kumar',
      contactPhone: '+91 98765 43210'
    },
    {
      id: 2,
      tourName: 'Kerala Backwaters',
      travelAgent: 'Royal Tours',
      guestCount: 2,
      checkIn: '2024-06-18',
      checkOut: '2024-06-20',
      nights: 2,
      roomsRequired: 1,
      totalAmount: 18000,
      status: 'confirmed',
      bookingDate: '2024-06-02',
      contactPerson: 'Priya Singh',
      contactPhone: '+91 87654 32109'
    },
    {
      id: 3,
      tourName: 'Rajasthan Heritage',
      travelAgent: 'Elite Expeditions',
      guestCount: 6,
      checkIn: '2024-06-20',
      checkOut: '2024-06-24',
      nights: 4,
      roomsRequired: 3,
      totalAmount: 72000,
      status: 'confirmed',
      bookingDate: '2024-06-03',
      contactPerson: 'Amit Sharma',
      contactPhone: '+91 76543 21098'
    }
  ]);

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'status-approved';
      case 'rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  };

  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const confirmedCount = bookings.filter(b => b.status === 'confirmed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Tour Bookings</h2>
          <p className="text-muted-foreground">Manage bookings from travel agents and tour packages</p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-card-foreground">{pendingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Confirmed</p>
              <p className="text-2xl font-bold text-card-foreground">{confirmedCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Guests</p>
              <p className="text-2xl font-bold text-card-foreground">
                {bookings.reduce((sum, booking) => sum + booking.guestCount, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <p className="text-2xl font-bold text-card-foreground">
                ₹{bookings.reduce((sum, booking) => sum + booking.totalAmount, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-card rounded-xl shadow-sm border p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-card-foreground">{booking.tourName}</h3>
                  <span className={`status-badge ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  by {booking.travelAgent} • Booked on {booking.bookingDate}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {booking.checkIn} - {booking.checkOut}
                      </p>
                      <p className="text-xs text-muted-foreground">{booking.nights} nights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {booking.guestCount} guests
                      </p>
                      <p className="text-xs text-muted-foreground">{booking.roomsRequired} rooms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {booking.contactPerson}
                      </p>
                      <p className="text-xs text-muted-foreground">{booking.contactPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <p className="text-xl font-bold text-card-foreground">
                  ₹{booking.totalAmount.toLocaleString()}
                </p>
                
                {booking.status === 'pending' && (
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(booking.id, 'confirmed')}
                      className="bg-success hover:bg-success/90"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(booking.id, 'rejected')}
                      className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourBookings;
