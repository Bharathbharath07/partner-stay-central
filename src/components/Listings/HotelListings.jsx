
import React, { useState } from 'react';
import { Building2, MapPin, Star, Edit, Eye, Camera, Wifi, Car, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HotelListings = () => {
  const [hotel] = useState({
    id: 1,
    name: 'Grand Palace Hotel',
    description: 'A luxury hotel in the heart of Mumbai offering world-class amenities and exceptional service.',
    location: 'Bandra West, Mumbai, Maharashtra',
    rating: 4.8,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    ],
    amenities: [
      { name: 'Free WiFi', icon: Wifi },
      { name: 'Parking', icon: Car },
      { name: 'Restaurant', icon: Coffee },
      { name: 'Room Service', icon: Building2 }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: '24 hours before check-in',
      petPolicy: 'Pets not allowed'
    },
    contact: {
      phone: '+91 22 2640 1234',
      email: 'reservations@grandpalace.com',
      website: 'www.grandpalace.com'
    },
    isActive: true
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Hotel Listing</h2>
          <p className="text-muted-foreground">Manage your hotel information and listing details</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview Listing
          </Button>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit Listing
          </Button>
        </div>
      </div>

      {/* Status Card */}
      <div className="bg-card rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Listing Status</h3>
              <p className="text-sm text-muted-foreground">Your hotel is currently live on TravelMax</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-success">Active</span>
          </div>
        </div>
      </div>

      {/* Hotel Information */}
      <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">Hotel Information</h3>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Basic Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-card-foreground mb-2">{hotel.name}</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{hotel.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="text-sm font-medium text-card-foreground">{hotel.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({hotel.reviewCount} reviews)</span>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-card-foreground mb-2">Description</h5>
                <p className="text-sm text-muted-foreground">{hotel.description}</p>
              </div>

              <div>
                <h5 className="font-medium text-card-foreground mb-3">Amenities</h5>
                <div className="grid grid-cols-2 gap-3">
                  {hotel.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-card-foreground">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Images & Policies */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-card-foreground">Hotel Images</h5>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Manage Photos
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {hotel.images.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Hotel ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-medium text-card-foreground mb-3">Hotel Policies</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-in:</span>
                    <span className="text-card-foreground">{hotel.policies.checkIn}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-out:</span>
                    <span className="text-card-foreground">{hotel.policies.checkOut}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cancellation:</span>
                    <span className="text-card-foreground">{hotel.policies.cancellation}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pet Policy:</span>
                    <span className="text-card-foreground">{hotel.policies.petPolicy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">Contact Information</h3>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-medium text-card-foreground mb-2">Phone</h5>
              <p className="text-sm text-muted-foreground">{hotel.contact.phone}</p>
            </div>
            <div>
              <h5 className="font-medium text-card-foreground mb-2">Email</h5>
              <p className="text-sm text-muted-foreground">{hotel.contact.email}</p>
            </div>
            <div>
              <h5 className="font-medium text-card-foreground mb-2">Website</h5>
              <p className="text-sm text-muted-foreground">{hotel.contact.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListings;
