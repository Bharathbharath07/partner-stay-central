
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterOptions {
  status: string;
  tourName: string;
  travelAgent: string;
  dateFrom: string;
  dateTo: string;
}

interface BookingFilterProps {
  onFilter: (filters: FilterOptions) => void;
  onReset: () => void;
}

export const BookingFilter: React.FC<BookingFilterProps> = ({ onFilter, onReset }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    status: '',
    tourName: '',
    travelAgent: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      status: '',
      tourName: '',
      travelAgent: '',
      dateFrom: '',
      dateTo: ''
    });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="tourName">Tour Name</Label>
        <Input
          id="tourName"
          value={filters.tourName}
          onChange={(e) => setFilters(prev => ({ ...prev, tourName: e.target.value }))}
          placeholder="Search by tour name"
        />
      </div>

      <div>
        <Label htmlFor="travelAgent">Travel Agent</Label>
        <Input
          id="travelAgent"
          value={filters.travelAgent}
          onChange={(e) => setFilters(prev => ({ ...prev, travelAgent: e.target.value }))}
          placeholder="Search by travel agent"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dateFrom">From Date</Label>
          <Input
            id="dateFrom"
            type="date"
            value={filters.dateFrom}
            onChange={(e) => setFilters(prev => ({ ...prev, dateFrom: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="dateTo">To Date</Label>
          <Input
            id="dateTo"
            type="date"
            value={filters.dateTo}
            onChange={(e) => setFilters(prev => ({ ...prev, dateTo: e.target.value }))}
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1">Apply Filters</Button>
        <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
      </div>
    </form>
  );
};
