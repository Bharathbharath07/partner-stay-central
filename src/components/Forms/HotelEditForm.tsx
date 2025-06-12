
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface HotelInfo {
  name: string;
  description: string;
  address: string;
  amenities: string[];
}

interface HotelEditFormProps {
  hotelInfo: HotelInfo;
  onSave: (data: HotelInfo) => void;
  onCancel: () => void;
}

export const HotelEditForm: React.FC<HotelEditFormProps> = ({ hotelInfo, onSave, onCancel }) => {
  const [formData, setFormData] = useState<HotelInfo>(hotelInfo);
  const [amenityInput, setAmenityInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addAmenity = () => {
    if (amenityInput.trim() && !formData.amenities.includes(amenityInput.trim())) {
      setFormData(prev => ({
        ...prev,
        amenities: [...prev.amenities, amenityInput.trim()]
      }));
      setAmenityInput('');
    }
  };

  const removeAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter(a => a !== amenity)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Hotel Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={3}
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
          rows={2}
          required
        />
      </div>

      <div>
        <Label htmlFor="amenities">Amenities</Label>
        <div className="flex space-x-2 mb-2">
          <Input
            value={amenityInput}
            onChange={(e) => setAmenityInput(e.target.value)}
            placeholder="Add amenity"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
          />
          <Button type="button" onClick={addAmenity} variant="outline">Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.amenities.map((amenity, index) => (
            <span key={index} className="px-2 py-1 bg-secondary rounded text-xs text-secondary-foreground">
              {amenity}
              <button
                type="button"
                onClick={() => removeAmenity(amenity)}
                className="ml-2 text-destructive hover:text-destructive/80"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1">Save Changes</Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
};
