
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageInclusion {
  name: string;
  included: boolean;
  commission: string;
}

interface TourPackageInclusionsProps {
  packages: PackageInclusion[];
}

export const TourPackageInclusions: React.FC<TourPackageInclusionsProps> = ({ packages }) => {
  return (
    <div className="bg-card rounded-xl shadow-sm border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-card-foreground">Tour Package Inclusions</h3>
        <p className="text-sm text-muted-foreground">Select which tour packages can include your hotel</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {packages.map((pkg, index) => (
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
  );
};
