
import React, { useState } from 'react';
import { Bed, Users, Calendar, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RoomInventory = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      roomType: 'Deluxe Suite',
      totalRooms: 10,
      availableRooms: 7,
      pricePerNight: 5000,
      maxGuests: 4,
      amenities: ['AC', 'WiFi', 'TV', 'Mini Bar']
    },
    {
      id: 2,
      roomType: 'Standard Room',
      totalRooms: 20,
      availableRooms: 15,
      pricePerNight: 3000,
      maxGuests: 2,
      amenities: ['AC', 'WiFi', 'TV']
    },
    {
      id: 3,
      roomType: 'Premium Suite',
      totalRooms: 5,
      availableRooms: 2,
      pricePerNight: 8000,
      maxGuests: 6,
      amenities: ['AC', 'WiFi', 'TV', 'Mini Bar', 'Balcony', 'Room Service']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Room Inventory</h2>
          <p className="text-muted-foreground">Manage your hotel room types and availability</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Room Type
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Bed className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Rooms</p>
              <p className="text-2xl font-bold text-card-foreground">
                {rooms.reduce((sum, room) => sum + room.totalRooms, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Calendar className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Available Rooms</p>
              <p className="text-2xl font-bold text-card-foreground">
                {rooms.reduce((sum, room) => sum + room.availableRooms, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Users className="w-6 h-6 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Occupancy Rate</p>
              <p className="text-2xl font-bold text-card-foreground">
                {Math.round(((rooms.reduce((sum, room) => sum + room.totalRooms, 0) - 
                  rooms.reduce((sum, room) => sum + room.availableRooms, 0)) / 
                  rooms.reduce((sum, room) => sum + room.totalRooms, 0)) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Room Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-card rounded-xl shadow-sm border hover-lift">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-card-foreground">{room.roomType}</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Rooms:</span>
                  <span className="text-sm font-medium text-card-foreground">{room.totalRooms}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Available:</span>
                  <span className={`text-sm font-medium ${
                    room.availableRooms > 5 ? 'text-success' : 
                    room.availableRooms > 2 ? 'text-warning' : 'text-destructive'
                  }`}>
                    {room.availableRooms}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Price/Night:</span>
                  <span className="text-sm font-medium text-card-foreground">₹{room.pricePerNight}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Max Guests:</span>
                  <span className="text-sm font-medium text-card-foreground">{room.maxGuests}</span>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${((room.totalRooms - room.availableRooms) / room.totalRooms) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">
                    {Math.round(((room.totalRooms - room.availableRooms) / room.totalRooms) * 100)}% Occupied
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomInventory;
