export  interface User {
  id: string;
  username: string;
  email?: string;
  avatarUrl?: string;
  isVerified: boolean;
  authProvider?: 'email' | 'google' | 'facebook' | 'guest';
}

export interface BeybladeCombo {
  id: string;
  userId: string;
  name: string;
  blade: string;
  ratchet: string;
  bit: string;
  tags: string[];
  wins: number;
  losses: number;
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  room: string;
  text: string;
  timestamp: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}
 