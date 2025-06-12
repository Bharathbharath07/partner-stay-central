
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RoomType {
  id?: number;
  type: string;
  capacity: number;
  available: number;
  total: number;
  price: number;
  amenities: string[];
  status: string;
}

interface RoomTypeFormProps {
  room?: RoomType;
  onSave: (room: RoomType) => void;
  onCancel: () => void;
}

export const RoomTypeForm: React.FC<RoomTypeFormProps> = ({ room, onSave, onCancel }) => {
  const [formData, setFormData] = useState<RoomType>({
    type: room?.type || '',
    capacity: room?.capacity || 2,
    available: room?.available || 0,
    total: room?.total || 0,
    price: room?.price || 0,
    amenities: room?.amenities || [],
    status: room?.status || 'active',
    ...room
  });

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
        <Label htmlFor="type">Room Type</Label>
        <Input
          id="type"
          value={formData.type}
          onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            id="capacity"
            type="number"
            value={formData.capacity}
            onChange={(e) => setFormData(prev => ({ ...prev, capacity: Number(e.target.value) }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price per Night (₹)</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="total">Total Rooms</Label>
          <Input
            id="total"
            type="number"
            value={formData.total}
            onChange={(e) => setFormData(prev => ({ ...prev, total: Number(e.target.value) }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="available">Available Rooms</Label>
          <Input
            id="available"
            type="number"
            value={formData.available}
            onChange={(e) => setFormData(prev => ({ ...prev, available: Number(e.target.value) }))}
            required
          />
        </div>
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
        <Button type="submit" className="flex-1">
          {room ? 'Update Room Type' : 'Add Room Type'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
