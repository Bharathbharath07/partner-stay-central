
import React, { useState } from 'react';
import { Building2, Star, MapPin, Edit, Camera, Wifi, Car, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HotelListings: React.FC = () => {
  const [hotelInfo, setHotelInfo] = useState({
    name: 'Grand Palace Hotel',
    description: 'Experience luxury and comfort at Grand Palace Hotel, located in the heart of Mumbai. Our hotel offers world-class amenities and exceptional service for discerning travelers.',
    address: '123 Marine Drive, Mumbai, Maharashtra 400001',
    rating: 4.8,
    totalReviews: 156,
    amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Room Service', 'Spa', 'Gym', 'Pool', 'Business Center'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400'
    ],
    isLive: true
  });

  const packageInclusions = [
    { name: 'Golden Triangle Tour', included: true, commission: '15%' },
    { name: 'Kerala Backwaters', included: true, commission: '18%' },
    { name: 'Rajasthan Heritage', included: true, commission: '20%' },
    { name: 'Goa Beach Package', included: false, commission: '12%' },
    { name: 'Himachal Adventure', included: false, commission: '16%' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Hotel Listing</h2>
        <p className="text-muted-foreground">Manage your hotel profile and tour package inclusions</p>
      </div>

      {/* Hotel Status */}
      <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-xl p-6 border">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-foreground">Listing Status</h3>
              <span className="status-badge status-approved">Live on Platform</span>
            </div>
            <p className="text-muted-foreground">
              Your hotel is visible to travel agents and appearing in tour packages
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-warning fill-current" />
            <span className="font-semibold text-foreground">{hotelInfo.rating}</span>
            <span className="text-muted-foreground">({hotelInfo.totalReviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Hotel Information */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h3 className="text-lg font-semibold text-card-foreground">Hotel Information</h3>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Edit Details
          </Button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-card-foreground mb-2">{hotelInfo.name}</h4>
                <p className="text-sm text-muted-foreground">{hotelInfo.description}</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                <p className="text-sm text-muted-foreground">{hotelInfo.address}</p>
              </div>

              <div>
                <h5 className="font-medium text-card-foreground mb-2">Amenities</h5>
                <div className="flex flex-wrap gap-2">
                  {hotelInfo.amenities.map((amenity, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-card-foreground mb-3">Hotel Images</h5>
              <div className="grid grid-cols-2 gap-3">
                {hotelInfo.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Hotel image ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
                <div className="w-full h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="text-center">
                    <Camera className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Add Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Package Inclusions */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">Tour Package Inclusions</h3>
          <p className="text-sm text-muted-foreground">Select which tour packages can include your hotel</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {packageInclusions.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">{pkg.name}</h4>
                    <p className="text-sm text-muted-foreground">Commission: {pkg.commission}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`status-badge ${
                    pkg.included ? 'status-approved' : 'status-pending'
                  }`}>
                    {pkg.included ? 'Included' : 'Not Included'}
                  </span>
                  <Button 
                    variant={pkg.included ? "outline" : "default"}
                    size="sm"
                  >
                    {pkg.included ? 'Remove' : 'Include'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listing Performance */}
      <div className="bg-card rounded-xl shadow-sm border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-card-foreground">Listing Performance</h3>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-card-foreground">245</p>
              <p className="text-sm text-muted-foreground">Profile Views</p>
              <p className="text-xs text-success">+12% this month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-card-foreground">34</p>
              <p className="text-sm text-muted-foreground">Booking Inquiries</p>
              <p className="text-xs text-success">+8% this month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-card-foreground">78%</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-xs text-warning">-3% this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListings;
