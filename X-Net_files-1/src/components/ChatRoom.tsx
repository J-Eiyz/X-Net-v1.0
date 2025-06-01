import  { useState, useEffect } from 'react';
import { Send, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Message } from '../types';

export default function ChatRoom() {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Mock receiving messages
  useEffect(() => {
    const timer = setInterval(() => {
      const newMessage: Message = {
        id: Math.random().toString(),
        userId: Math.random().toString(),
        username: ['BeyMaster', 'DragonSlayer', 'StadiumKing'][Math.floor(Math.random() * 3)],
        room: 'general',
        text: ['Anyone up for a battle?', 'Check out my new combo!', 'Just won the tournament!'][Math.floor(Math.random() * 3)],
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, newMessage]);
    }, 10000);
    
    return () => clearInterval(timer);
  }, []);
  
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user) return;
    
    const newMessage: Message = {
      id: Math.random().toString(),
      userId: user.id,
      username: user.username,
      room: 'general',
      text: message,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
  };
  
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="bg-gray-900 p-4 border-b border-gray-800">
        <h2 className="text-lg font-bold">X-Arena Chat</h2>
        <p className="text-sm text-gray-400">Connect with fellow bladers</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.userId === user?.id ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs rounded-lg px-4 py-2 ${
                msg.userId === user?.id 
                  ? 'bg-xblue-600 text-white rounded-br-none' 
                  : 'bg-gray-800 text-gray-200 rounded-bl-none'
              }`}
            >
              {msg.userId !== user?.id && (
                <div className="font-bold text-xs text-white mb-1">{msg.username}</div>
              )}
              <p>{msg.text}</p>
              <div className="text-xs opacity-70 text-right mt-1">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={sendMessage} className="p-4 bg-gray-900 border-t border-gray-800 flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-xblue-500"
        />
        <button 
          type="submit" 
          className="bg-xblue-600 text-white p-2 rounded-r-md hover:bg-xblue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
 