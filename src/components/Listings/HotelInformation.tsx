
import React from 'react';
import { MapPin, Camera } from 'lucide-react';

interface HotelInformationProps {
  name: string;
  description: string;
  address: string;
  amenities: string[];
  images: string[];
}

export const HotelInformation: React.FC<HotelInformationProps> = ({
  name,
  description,
  address,
  amenities,
  images
}) => {
  return (
    <div className="bg-card rounded-xl shadow-sm border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-card-foreground">Hotel Information</h3>
      </div>
      
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-card-foreground mb-2">{name}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>

            <div>
              <h5 className="font-medium text-card-foreground mb-2">Amenities</h5>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
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
              {images.map((image, index) => (
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
  );
};
