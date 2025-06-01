import  { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AgeVerification from './components/AgeVerification';
import HomePage from './pages/HomePage';
import CombosPage from './pages/CombosPage';
import ChatPage from './pages/ChatPage';
import UploadPage from './pages/UploadPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <AgeVerification /> : <Navigate to="/" />} />
      <Route path="/" element={
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      } />
      <Route path="/combos" element={
        <RequireAuth>
          <CombosPage />
        </RequireAuth>
      } />
      <Route path="/chat" element={
        <RequireAuth>
          <ChatPage />
        </RequireAuth>
      } />
      <Route path="/upload" element={
        <RequireAuth>
          <UploadPage />
        </RequireAuth>
      } />
      <Route path="/community" element={
        <RequireAuth>
          <CommunityPage />
        </RequireAuth>
      } />
      <Route path="/profile" element={
        <RequireAuth>
          <ProfilePage />
        </RequireAuth>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = isAuthenticated ? 'X-Net: Home' : 'X-Net: Login';
  }, [isAuthenticated]);
  
  return <AppRoutes />;
}

export default App;
 