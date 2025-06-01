import  Navbar from '../components/Navbar';
import { User, MapPin, Calendar } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="relative">
        <div className="h-80 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1693765928037-fc20daa4c26f" 
            alt="Beyblade Arena" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-8">Beyblade X Community</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Events Card */}
            <div className="card border border-gray-800">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-xblue-500" />
                  Upcoming Events
                </h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-xblue-500 pl-4">
                    <h3 className="font-medium text-white">Regional Championship</h3>
                    <p className="text-sm text-gray-400">August 15, 2023 • New York</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Top bladers compete for the regional title.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-xblue-500 pl-4">
                    <h3 className="font-medium text-white">Beginner Workshop</h3>
                    <p className="text-sm text-gray-400">August 22, 2023 • Online</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Learn the basics from professional bladers.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-xblue-500 pl-4">
                    <h3 className="font-medium text-white">Custom Combo Challenge</h3>
                    <p className="text-sm text-gray-400">September 5, 2023 • Online</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Submit your most creative combo for prizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Leaderboard Card */}
            <div className="card border border-gray-800">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-xblue-500" />
                  Top Bladers
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-xblue-700 flex items-center justify-center text-white font-bold mr-3">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-white">BladeChampion</p>
                        <p className="text-xs text-gray-400">45 wins • 3 losses</p>
                      </div>
                    </div>
                    <div className="bg-black text-xblue-400 text-xs px-2 py-1 rounded-full border border-xblue-800">
                      Champion
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-xblue-700 flex items-center justify-center text-white font-bold mr-3">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-white">BeyMaster99</p>
                        <p className="text-xs text-gray-400">42 wins • 5 losses</p>
                      </div>
                    </div>
                    <div className="bg-black text-xblue-400 text-xs px-2 py-1 rounded-full border border-xblue-800">
                      Elite
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-xblue-700 flex items-center justify-center text-white font-bold mr-3">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-white">SpinExpert</p>
                        <p className="text-xs text-gray-400">38 wins • 7 losses</p>
                      </div>
                    </div>
                    <div className="bg-black text-xblue-400 text-xs px-2 py-1 rounded-full border border-xblue-800">
                      Elite
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-xblue-700 flex items-center justify-center text-white font-bold mr-3">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-white">DragonSlayer</p>
                        <p className="text-xs text-gray-400">35 wins • 9 losses</p>
                      </div>
                    </div>
                    <div className="bg-black text-xblue-400 text-xs px-2 py-1 rounded-full border border-xblue-800">
                      Pro
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-xblue-700 flex items-center justify-center text-white font-bold mr-3">
                        5
                      </div>
                      <div>
                        <p className="font-medium text-white">StadiumKing</p>
                        <p className="text-xs text-gray-400">33 wins • 11 losses</p>
                      </div>
                    </div>
                    <div className="bg-black text-xblue-400 text-xs px-2 py-1 rounded-full border border-xblue-800">
                      Pro
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Local Groups Card */}
            <div className="card border border-gray-800">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-xblue-500" />
                  Local Groups
                </h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-800 rounded-md p-3">
                    <h3 className="font-medium text-white">NYC Bladers</h3>
                    <p className="text-xs text-gray-400 mb-2">New York, NY • 87 members</p>
                    <p className="text-sm text-gray-300">
                      Weekly meetups at Central Park on Saturdays.
                    </p>
                    <button className="mt-2 text-xs bg-xblue-600 hover:bg-xblue-700 text-white px-3 py-1 rounded-md">
                      Join Group
                    </button>
                  </div>
                  
                  <div className="border border-gray-800 rounded-md p-3">
                    <h3 className="font-medium text-white">LA Spinners</h3>
                    <p className="text-xs text-gray-400 mb-2">Los Angeles, CA • 64 members</p>
                    <p className="text-sm text-gray-300">
                      Tournaments every other Sunday at Santa Monica.
                    </p>
                    <button className="mt-2 text-xs bg-xblue-600 hover:bg-xblue-700 text-white px-3 py-1 rounded-md">
                      Join Group
                    </button>
                  </div>
                  
                  <div className="border border-gray-800 rounded-md p-3">
                    <h3 className="font-medium text-white">Online Warriors</h3>
                    <p className="text-xs text-gray-400 mb-2">Virtual • 156 members</p>
                    <p className="text-sm text-gray-300">
                      Discord group for strategy discussion and online battles.
                    </p>
                    <button className="mt-2 text-xs bg-xblue-600 hover:bg-xblue-700 text-white px-3 py-1 rounded-md">
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 