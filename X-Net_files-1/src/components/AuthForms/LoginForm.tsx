import  { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isLoading, error, clearError } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
        Sign in to your account
      </h1>
      
      {error && (
        <div className="p-3 text-sm bg-red-900/50 border border-red-800 rounded-md text-red-200">
          {error}
        </div>
      )}
      
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError();
              }}
              className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-lg focus:ring-xblue-600 focus:border-xblue-600 block w-full pl-10 p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError();
              }}
              placeholder="••••••••"
              className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-lg focus:ring-xblue-600 focus:border-xblue-600 block w-full pl-10 p-2.5"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-300"
              >
                {showPassword ? 
                  <EyeOff className="w-5 h-5" /> : 
                  <Eye className="w-5 h-5" />
                }
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-700 rounded bg-gray-800 focus:ring-xblue-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-400">Remember me</label>
            </div>
          </div>
          <a href="#" className="text-sm font-medium text-xblue-500 hover:underline">Forgot password?</a>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white bg-xblue-600 hover:bg-xblue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-xblue-800 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <LogIn className="mr-2 -ml-1 w-5 h-5" />
          )}
          Sign in
        </button>
        
        <p className="text-sm font-light text-gray-400">
          Don't have an account yet?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-medium text-xblue-500 hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}
 