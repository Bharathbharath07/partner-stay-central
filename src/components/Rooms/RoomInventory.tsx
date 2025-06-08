
import React, { useState } from 'react';
import { Bed, Users, Edit, Calendar, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoomInventory: React.FC = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      type: 'Deluxe Room',
      capacity: 2,
      available: 8,
      total: 10,
      price: 3500,
      amenities: ['AC', 'WiFi', 'TV', 'Mini Bar'],
      status: 'active'
    },
    {
      id: 2,
      type: 'Premium Suite',
      capacity: 4,
      available: 3,
      total: 5,
      price: 6500,
      amenities: ['AC', 'WiFi', 'TV', 'Mini Bar', 'Balcony', 'Jacuzzi'],
      status: 'active'
    },
    {
      id: 3,
      type: 'Standard Room',
      capacity: 2,
      available: 12,
      total: 15,
      price: 2500,
      amenities: ['AC', 'WiFi', 'TV'],
      status: 'active'
    },
    {
      id: 4,
      type: 'Family Suite',
      capacity: 6,
      available: 0,
      total: 3,
      price: 8500,
      amenities: ['AC', 'WiFi', 'TV', 'Mini Bar', 'Kitchen', 'Living Area'],
      status: 'maintenance'
    }
  ]);

  const [blockedDates, setBlockedDates] = useState([
    { date: '2024-06-15', reason: 'Maintenance' },
    { date: '2024-06-16', reason: 'Private Event' }
  ]);

  const totalRooms = rooms.reduce((sum, room) => sum + room.total, 0);
  const availableRooms = rooms.reduce((sum, room) => sum + room.available, 0);
  const occupancyRate = Math.round(((totalRooms - availableRooms) / totalRooms) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Room Inventory</h2>
        <p className="text-muted-foreground">Manage your room types and availability for tour bookings</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bed className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Rooms</p>
              <p className="text-2xl font-bold text-card-foreground">{totalRooms}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Available</p>
              <p className="text-2xl font-bold text-card-foreground">{availableRooms}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Users className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Occupancy</p>
              <p className="text-2xl font-bold text-card-foreground">{occupancyRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <X className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Blocked Dates</p>
              <p className="text-2xl font-bold text-card-foreground">{blockedDates.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Room Types</h3>
            <p className="text-sm text-muted-foreground">Manage your room inventory and pricing</p>
          </div>
          <Button>Add Room Type</Button>
        </div>
        
        <div className="p-6">
          <div className="grid gap-4">
            {rooms.map((room) => (
              <div key={room.id} className="border rounded-lg p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Bed className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{room.type}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Up to {room.capacity} guests
                        </span>
                        <span>₹{room.price.toLocaleString()}/night</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Availability</p>
                      <p className="font-semibold text-card-foreground">
                        {room.available}/{room.total} rooms
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <span className={`status-badge ${
                        room.status === 'active' ? 'status-approved' : 'status-pending'
                      }`}>
                        {room.status}
                      </span>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">Amenities:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-secondary rounded text-xs text-secondary-foreground">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blocked Dates */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Blocked Dates</h3>
            <p className="text-sm text-muted-foreground">Dates when rooms are not available for booking</p>
          </div>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Block Date
          </Button>
        </div>
        
        <div className="p-6">
          {blockedDates.length > 0 ? (
            <div className="space-y-3">
              {blockedDates.map((blocked, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="font-medium text-card-foreground">{blocked.date}</p>
                      <p className="text-sm text-muted-foreground">{blocked.reason}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">No blocked dates</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomInventory;
