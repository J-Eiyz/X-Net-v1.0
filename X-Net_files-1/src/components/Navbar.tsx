import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut, Home, MessageSquare, FileText, Upload, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/8f1e8cac-d6b5-4348-5c93-e55413477700/public" 
                alt="X-Net Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-white">X-<span className="text-xblue-600">Net</span></span>
            </Link>
          </div>
          
          {isAuthenticated && (
            <>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Home className="h-4 w-4 mr-1" /> Home
                  </Link>
                  <Link to="/combos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <FileText className="h-4 w-4 mr-1" /> Combos
                  </Link>
                  <Link to="/chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" /> Chat
                  </Link>
                  <Link to="/upload" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Upload className="h-4 w-4 mr-1" /> Upload
                  </Link>
                  <Link to="/community" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Users className="h-4 w-4 mr-1" /> Community
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Link to="/profile" className="p-1 rounded-full text-gray-400 hover:text-white flex items-center">
                    {user?.avatarUrl ? (
                      <img 
                        src={user.avatarUrl} 
                        alt={user.username} 
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-xblue-700 flex items-center justify-center text-white text-sm font-bold">
                        {user?.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="ml-2 text-sm">{user?.username}</span>
                  </Link>
                  <button onClick={logout} className="ml-3 p-1 rounded-full text-gray-400 hover:text-white">
                    <LogOut className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </>
          )}
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && isAuthenticated && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <Home className="h-4 w-4 inline mr-1" /> Home
            </Link>
            <Link to="/combos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <FileText className="h-4 w-4 inline mr-1" /> Combos
            </Link>
            <Link to="/chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <MessageSquare className="h-4 w-4 inline mr-1" /> Chat
            </Link>
            <Link to="/upload" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <Upload className="h-4 w-4 inline mr-1" /> Upload
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <Users className="h-4 w-4 inline mr-1" /> Community
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <User className="h-4 w-4 inline mr-1" /> Profile
            </Link>
            <button 
              onClick={logout} 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              <LogOut className="h-4 w-4 inline mr-1" /> Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
 