
import React from 'react';
import { Star, Eye, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelStatusProps {
  rating: number;
  totalReviews: number;
  onPreview: () => void;
  onEdit: () => void;
}

export const HotelStatus: React.FC<HotelStatusProps> = ({
  rating,
  totalReviews,
  onPreview,
  onEdit
}) => {
  return (
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
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-warning fill-current" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onPreview}>
              <Eye className="w-4 h-4 mr-2" />
              Preview Listing
            </Button>
            <Button onClick={onEdit}>
              <Edit className="w-4 h-4 mr-2" />
              Edit Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
