import  { Facebook, LogIn, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function SocialLogins() {
  const { loginWithGoogle, loginWithFacebook, continueAsGuest, isLoading } = useAuth();
  
  return (
    <div className="p-6 space-y-4 md:space-y-6 border-t border-gray-800 sm:p-8">
      <h2 className="text-lg font-medium text-white text-center">
        Or continue with
      </h2>
      
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => loginWithGoogle()}
          disabled={isLoading}
          className="w-full flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          Continue with Google
        </button>
        
        <button
          type="button"
          onClick={() => loginWithFacebook()}
          disabled={isLoading}
          className="w-full flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Continue with Facebook
        </button>
        
        <button
          type="button"
          onClick={() => continueAsGuest()}
          disabled={isLoading}
          className="w-full flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <User className="w-5 h-5 mr-2" />
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
 