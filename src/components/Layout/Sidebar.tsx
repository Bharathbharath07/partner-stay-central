
import React from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  Bed, 
  Calendar, 
  MessageSquare, 
  LogOut,
  Plane
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  hotelName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  onTabChange, 
  onLogout, 
  hotelName 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'listings', label: 'Hotel Listing', icon: Building2 },
    { id: 'inventory', label: 'Room Inventory', icon: Bed },
    { id: 'bookings', label: 'Tour Bookings', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  return (
    <div className="w-64 bg-sidebar h-screen flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center mb-3">
          <Plane className="w-6 h-6 text-sidebar-primary mr-2" />
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">TravelMax</h1>
            <p className="text-xs text-sidebar-accent-foreground">Partner Portal</p>
          </div>
        </div>
        <div className="bg-sidebar-accent rounded-lg p-3">
          <p className="text-sm font-medium text-sidebar-foreground">{hotelName}</p>
          <p className="text-xs text-sidebar-accent-foreground">Hotel Partner</p>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg'
                      : 'text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={onLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
