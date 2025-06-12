
import React from 'react';

export const ListingPerformance: React.FC = () => {
  return (
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
  );
};
