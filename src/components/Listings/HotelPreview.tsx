
import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface HotelPreviewProps {
  name: string;
  description: string;
  address: string;
  rating: number;
  totalReviews: number;
}

export const HotelPreview: React.FC<HotelPreviewProps> = ({
  name,
  description,
  address,
  rating,
  totalReviews
}) => {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Hotel Image Preview</p>
      </div>
      <div>
        <h4 className="font-semibold text-card-foreground">{name}</h4>
        <div className="flex items-center space-x-2 mt-1">
          <Star className="w-4 h-4 text-warning fill-current" />
          <span className="text-sm">{rating} ({totalReviews} reviews)</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-start space-x-2">
        <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
        <p className="text-sm text-muted-foreground">{address}</p>
      </div>
    </div>
  );
};
