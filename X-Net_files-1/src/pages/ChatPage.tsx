import  Navbar from '../components/Navbar';
import ChatRoom from '../components/ChatRoom';
import { Users, MessageSquare } from 'lucide-react';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4">
        {/* Left - Chat Rooms */}
        <div className="bg-gray-900 border-r border-gray-800 p-4">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <MessageSquare className="h-5 w-5 mr-2 text-xblue-500" />
            Chat Rooms
          </h2>
          
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-md bg-xblue-700 text-white flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              General
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Tournament
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Strategy
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Off-Topic
            </button>
          </div>
          
          <h2 className="text-lg font-bold mt-6 mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-xblue-500" />
            Online Users
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              BladeChampion
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              BeyMaster99
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              SpinExpert
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              DragonSlayer
            </div>
          </div>
        </div>
        
        {/* Right - Chat Content */}
        <div className="md:col-span-3">
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}
 