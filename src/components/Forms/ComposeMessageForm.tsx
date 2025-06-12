
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ComposeMessageFormProps {
  onSend: (message: { to: string; subject: string; message: string }) => void;
  onCancel: () => void;
}

export const ComposeMessageForm: React.FC<ComposeMessageFormProps> = ({ onSend, onCancel }) => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(formData);
    setFormData({ to: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="to">To</Label>
        <Select value={formData.to} onValueChange={(value) => setFormData(prev => ({ ...prev, to: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Select recipient" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="support">TravelMax Support</SelectItem>
            <SelectItem value="operations">TravelMax Operations</SelectItem>
            <SelectItem value="dream-travels">Dream Travels</SelectItem>
            <SelectItem value="royal-tours">Royal Tours</SelectItem>
            <SelectItem value="elite-expeditions">Elite Expeditions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={5}
          required
        />
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1">Send Message</Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
};
