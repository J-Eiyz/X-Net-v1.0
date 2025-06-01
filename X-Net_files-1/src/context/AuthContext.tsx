import  { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User, AuthCredentials } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  continueAsGuest: (username?: string) => void;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for stored user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('x-net-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('x-net-user');
      }
    }
  }, []);

  const clearError = () => setError(null);

  const saveUserToStorage = (user: User) => {
    localStorage.setItem('x-net-user', JSON.stringify(user));
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      clearError();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would validate credentials with a backend
      if (email === 'test@example.com' && password === 'password') {
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          username: email.split('@')[0],
          email,
          isVerified: true,
          authProvider: 'email'
        };
        
        setUser(newUser);
        saveUserToStorage(newUser);
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, username: string): Promise<void> => {
    try {
      setIsLoading(true);
      clearError();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would create a user in your backend
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        username,
        email,
        isVerified: true,
        authProvider: 'email'
      };
      
      setUser(newUser);
      saveUserToStorage(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      clearError();
      
      // Simulate OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would redirect to Google OAuth flow
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        username: 'google_user',
        email: 'google_user@gmail.com',
        avatarUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=100&auto=format&fit=crop',
        isVerified: true,
        authProvider: 'google'
      };
      
      setUser(newUser);
      saveUserToStorage(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during Google login');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async (): Promise<void> => {
    try {
      setIsLoading(true);
      clearError();
      
      // Simulate OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would redirect to Facebook OAuth flow
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        username: 'facebook_user',
        email: 'facebook_user@example.com',
        avatarUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=100&auto=format&fit=crop',
        isVerified: true,
        authProvider: 'facebook'
      };
      
      setUser(newUser);
      saveUserToStorage(newUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during Facebook login');
    } finally {
      setIsLoading(false);
    }
  };

  const continueAsGuest = (username?: string): void => {
    const guestName = username || `Guest_${Math.floor(Math.random() * 10000)}`;
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      username: guestName,
      isVerified: true,
      authProvider: 'guest'
    };
    
    setUser(newUser);
    saveUserToStorage(newUser);
  };

  const logout = (): void => {
    localStorage.removeItem('x-net-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        signup,
        loginWithGoogle,
        loginWithFacebook,
        continueAsGuest,
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
 