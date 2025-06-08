
import React, { useState } from 'react';
import { MessageSquare, Send, Paperclip, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const PartnerMessages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'TravelMax Support',
      subject: 'Welcome to TravelMax Partner Program',
      message: 'Welcome to TravelMax! We\'re excited to have you as our hotel partner. Your listing is now live on our platform.',
      timestamp: '2024-06-01 10:30 AM',
      isRead: true,
      type: 'system'
    },
    {
      id: 2,
      from: 'Dream Travels',
      subject: 'Bulk Booking Inquiry - Golden Triangle Tour',
      message: 'Hello, we have a group of 20 guests for Golden Triangle tour from June 15-18. Can you accommodate? Please confirm rates.',
      timestamp: '2024-06-03 2:15 PM',
      isRead: true,
      type: 'agent'
    },
    {
      id: 3,
      from: 'TravelMax Operations',
      subject: 'Payment Processing Update',
      message: 'Your payment for May bookings has been processed. Please check your account for details.',
      timestamp: '2024-06-05 11:45 AM',
      isRead: false,
      type: 'system'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(messages[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add new message logic here
      setNewMessage('');
    }
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Messages</h2>
        <p className="text-muted-foreground">Communicate with travel agents and TravelMax support</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Message List */}
        <div className="lg:col-span-1 bg-card rounded-xl shadow-sm border">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-card-foreground">Inbox</h3>
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
          
          <div className="overflow-y-auto h-full">
            {messages.map((message) => (
              <div 
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 border-b border-border cursor-pointer hover:bg-secondary/50 transition-colors ${
                  selectedMessage?.id === message.id ? 'bg-secondary' : ''
                } ${!message.isRead ? 'bg-primary/5' : ''}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-card-foreground text-sm truncate">
                    {message.from}
                  </p>
                  <div className="flex items-center space-x-1">
                    {!message.isRead && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                    <Clock className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
                <p className="font-medium text-card-foreground text-sm mb-1 truncate">
                  {message.subject}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {message.message}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {message.timestamp}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-card rounded-xl shadow-sm border flex flex-col">
          {selectedMessage ? (
            <>
              {/* Message Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-card-foreground text-lg">
                      {selectedMessage.subject}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      From: {selectedMessage.from}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedMessage.timestamp}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedMessage.type === 'system' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-success/10 text-success'
                    }`}>
                      {selectedMessage.type === 'system' ? 'System' : 'Travel Agent'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 p-6">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-card-foreground">{selectedMessage.message}</p>
                </div>
              </div>

              {/* Reply Section */}
              <div className="p-6 border-t border-border">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your reply..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Paperclip className="w-4 h-4 mr-2" />
                      Attach File
                    </Button>
                    <Button onClick={handleSendMessage}>
                      <Send className="w-4 h-4 mr-2" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a message to view</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl shadow-sm border p-6">
        <h3 className="font-semibold text-card-foreground mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
          <Button variant="outline" className="justify-start">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Report Issue
          </Button>
          <Button variant="outline" className="justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Bulk Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerMessages;
