import  { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import FeedPost from '../components/FeedPost';
import { mockPosts } from '../data/mockData';
import UploadForm from '../components/UploadForm';

export default function HomePage() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <div className="card p-6 mb-6 border border-gray-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-xblue-700 flex items-center justify-center text-white text-2xl font-bold">
                  {user?.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{user?.username}</h2>
                  <p className="text-gray-400 text-sm">Blader Level 1</p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <p className="text-xl font-bold text-white">0</p>
                    <p className="text-sm text-gray-400">Battles</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">0</p>
                    <p className="text-sm text-gray-400">Combos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">Trending Tags</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xblue-400">#DragonAttack</span>
                  <span className="text-xs text-gray-400">24 posts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xblue-400">#TournamentPrep</span>
                  <span className="text-xs text-gray-400">18 posts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xblue-400">#DefenseMeta</span>
                  <span className="text-xs text-gray-400">12 posts</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <UploadForm />
            
            <div className="mt-6">
              <h2 className="text-xl font-bold text-white mb-4">Latest Posts</h2>
              
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
 