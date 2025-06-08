
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TourBookings: React.FC = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      tourName: 'Golden Triangle Tour',
      travelAgent: 'Dream Travels',
      agentContact: '+91 98765 43210',
      agentEmail: 'booking@dreamtravels.com',
      guestName: 'John & Sarah Smith',
      guestCount: 4,
      checkIn: '2024-06-15',
      checkOut: '2024-06-18',
      roomType: 'Deluxe Room',
      roomsBooked: 2,
      totalAmount: 21000,
      status: 'pending',
      bookingDate: '2024-06-01',
      specialRequests: 'Vegetarian meals, early check-in if possible'
    },
    {
      id: 2,
      tourName: 'Kerala Backwaters Experience',
      travelAgent: 'Royal Tours',
      agentContact: '+91 87654 32109',
      agentEmail: 'reservations@royaltours.in',
      guestName: 'Mike & Lisa Johnson',
      guestCount: 2,
      checkIn: '2024-06-18',
      checkOut: '2024-06-20',
      roomType: 'Premium Suite',
      roomsBooked: 1,
      totalAmount: 13000,
      status: 'confirmed',
      bookingDate: '2024-06-02',
      specialRequests: 'Honeymoon package, late checkout'
    },
    {
      id: 3,
      tourName: 'Rajasthan Heritage Circuit',
      travelAgent: 'Elite Expeditions',
      agentContact: '+91 76543 21098',
      agentEmail: 'group@eliteexp.com',
      guestName: 'Williams Family Group',
      guestCount: 6,
      checkIn: '2024-06-20',
      checkOut: '2024-06-24',
      roomType: 'Family Suite',
      roomsBooked: 2,
      totalAmount: 34000,
      status: 'rejected',
      bookingDate: '2024-06-03',
      specialRequests: 'Adjoining rooms, baby cot required'
    }
  ]);

  const handleStatusChange = (bookingId: number, newStatus: string) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };

  const getStatusColor = (status: string) => {
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
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tour Bookings</h2>
        <p className="text-muted-foreground">Manage bookings from travel agents and tour packages</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
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
              <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
              <p className="text-2xl font-bold text-card-foreground">{bookings.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-card rounded-xl shadow-sm border">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground text-lg">{booking.tourName}</h3>
                    <p className="text-sm text-muted-foreground">Booking #{booking.id} • Booked on {booking.bookingDate}</p>
                  </div>
                </div>
                <span className={`status-badge ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Travel Agent Info */}
                <div className="space-y-3">
                  <h4 className="font-medium text-card-foreground">Travel Agent</h4>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">{booking.travelAgent}</p>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      {booking.agentContact}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      {booking.agentEmail}
                    </div>
                  </div>
                </div>

                {/* Guest & Booking Info */}
                <div className="space-y-3">
                  <h4 className="font-medium text-card-foreground">Booking Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Guests:</span> {booking.guestName}</p>
                    <p><span className="text-muted-foreground">Party Size:</span> {booking.guestCount} guests</p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {booking.checkIn} to {booking.checkOut}
                    </div>
                    <p><span className="text-muted-foreground">Rooms:</span> {booking.roomsBooked}x {booking.roomType}</p>
                    <p><span className="text-muted-foreground">Total Amount:</span> <span className="font-semibold text-card-foreground">₹{booking.totalAmount.toLocaleString()}</span></p>
                  </div>
                </div>
              </div>

              {booking.specialRequests && (
                <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                  <p className="text-sm font-medium text-card-foreground mb-1">Special Requests:</p>
                  <p className="text-sm text-muted-foreground">{booking.specialRequests}</p>
                </div>
              )}

              {booking.status === 'pending' && (
                <div className="mt-6 flex space-x-3">
                  <Button 
                    onClick={() => handleStatusChange(booking.id, 'confirmed')}
                    className="flex-1"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirm Booking
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleStatusChange(booking.id, 'rejected')}
                    className="flex-1"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject Booking
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourBookings;
