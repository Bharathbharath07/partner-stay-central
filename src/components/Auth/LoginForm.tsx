
import React, { useState } from 'react';
import { Plane, Mail, Lock, Eye, EyeOff, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      onLogin({ email, password });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Travel Platform Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-bg items-center justify-center p-8">
        <div className="text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Plane className="w-12 h-12 mr-3" />
            <div className="text-left">
              <h1 className="text-3xl font-bold">TravelMax</h1>
              <p className="text-sm opacity-90">Tours & Travels</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Hotel Partner Portal</h2>
          <p className="text-xl opacity-90 max-w-md mb-8">
            Join our network of premium hotels and reach thousands of travelers worldwide.
          </p>
          
          <div className="space-y-4 text-left max-w-md">
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5" />
              <span>List your hotel on our platform</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5" />
              <span>Manage bookings from tour packages</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5" />
              <span>Connect with travel agents</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5" />
              <span>Increase your occupancy rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 lg:hidden">
              <Plane className="w-8 h-8 text-primary mr-2" />
              <span className="text-xl font-bold">TravelMax</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Partner Login</h2>
            <p className="text-muted-foreground mt-2">Access your hotel partner dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Hotel Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="hotel@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Access Partner Dashboard'}
            </Button>
          </form>

          <div className="text-center space-y-4">
            <a href="#" className="text-sm text-primary hover:underline block">
              Forgot your password?
            </a>
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground mb-2">
                Not a partner yet?
              </p>
              <Button variant="outline" className="w-full">
                Become a Hotel Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
