
import React, { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { HotelEditForm } from '@/components/Forms/HotelEditForm';
import { HotelStatus } from './HotelStatus';
import { HotelInformation } from './HotelInformation';
import { TourPackageInclusions } from './TourPackageInclusions';
import { ListingPerformance } from './ListingPerformance';
import { HotelPreview } from './HotelPreview';
import { toast } from 'sonner';

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

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const packageInclusions = [
    { name: 'Golden Triangle Tour', included: true, commission: '15%' },
    { name: 'Kerala Backwaters', included: true, commission: '18%' },
    { name: 'Rajasthan Heritage', included: true, commission: '20%' },
    { name: 'Goa Beach Package', included: false, commission: '12%' },
    { name: 'Himachal Adventure', included: false, commission: '16%' }
  ];

  const handleEditSave = (data: any) => {
    console.log('Saving hotel edit data:', data);
    setHotelInfo(prev => ({ ...prev, ...data }));
    setShowEditModal(false);
    toast.success('Hotel information updated successfully!');
  };

  const handlePreview = () => {
    console.log('Opening hotel preview modal');
    setShowPreviewModal(true);
  };

  const handleEdit = () => {
    console.log('Opening hotel edit modal');
    setShowEditModal(true);
  };

  const handleEditCancel = () => {
    console.log('Cancelling hotel edit');
    setShowEditModal(false);
  };

  const handlePreviewClose = () => {
    console.log('Closing hotel preview');
    setShowPreviewModal(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Hotel Listing</h2>
        <p className="text-muted-foreground">Manage your hotel profile and tour package inclusions</p>
      </div>

      <HotelStatus
        rating={hotelInfo.rating}
        totalReviews={hotelInfo.totalReviews}
        onPreview={handlePreview}
        onEdit={handleEdit}
      />

      <HotelInformation
        name={hotelInfo.name}
        description={hotelInfo.description}
        address={hotelInfo.address}
        amenities={hotelInfo.amenities}
        images={hotelInfo.images}
      />

      <TourPackageInclusions packages={packageInclusions} />

      <ListingPerformance />

      {/* Edit Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={handleEditCancel}
        title="Edit Hotel Information"
      >
        <HotelEditForm
          hotelInfo={hotelInfo}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />
      </Modal>

      {/* Preview Modal */}
      <Modal
        isOpen={showPreviewModal}
        onClose={handlePreviewClose}
        title="Hotel Listing Preview"
      >
        <HotelPreview
          name={hotelInfo.name}
          description={hotelInfo.description}
          address={hotelInfo.address}
          rating={hotelInfo.rating}
          totalReviews={hotelInfo.totalReviews}
        />
      </Modal>
    </div>
  );
};

export default HotelListings;
