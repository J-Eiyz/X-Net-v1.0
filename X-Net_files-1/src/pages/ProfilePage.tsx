import  Navbar from '../components/Navbar';
import ComboCard from '../components/ComboCard';
import FeedPost from '../components/FeedPost';
import { mockCombos, mockPosts } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, MapPin, Settings } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="relative">
        <div className="h-64 w-full bg-gradient-to-r from-black to-gray-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <div className="h-24 w-24 rounded-full ring-4 ring-black bg-xblue-600 flex items-center justify-center text-white text-4xl font-bold sm:h-32 sm:w-32">
                {user?.username.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-white truncate">{user?.username}</h1>
                <p className="text-sm text-gray-400 flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  {user?.username.toLowerCase()}@xnet.com
                </p>
                <div className="flex items-center mt-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined July 2023</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>New York, NY</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-xblue-600 hover:bg-xblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-xblue-500 focus:ring-offset-gray-900"
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-white truncate">{user?.username}</h1>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left - Profile Stats */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6 border border-gray-800">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-xblue-500" />
                Profile Stats
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Battles</span>
                  <span className="font-medium text-white">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wins</span>
                  <span className="font-medium text-white">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="font-medium text-white">0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Combos</span>
                  <span className="font-medium text-white">{mockCombos.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Posts</span>
                  <span className="font-medium text-white">{mockPosts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rank</span>
                  <span className="font-medium text-white">Beginner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Tabs Content */}
          <div className="lg:col-span-3">
            <div className="mb-6 border-b border-gray-800">
              <nav className="-mb-px flex space-x-8">
                <button className="whitespace-nowrap py-4 px-1 border-b-2 border-xblue-500 font-medium text-white">
                  Posts
                </button>
                <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-400 hover:text-gray-300 hover:border-gray-600">
                  Combos
                </button>
                <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-400 hover:text-gray-300 hover:border-gray-600">
                  Battles
                </button>
                <button className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-400 hover:text-gray-300 hover:border-gray-600">
                  Likes
                </button>
              </nav>
            </div>
            
            <div className="space-y-6">
              {mockPosts.map(post => (
                <FeedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 