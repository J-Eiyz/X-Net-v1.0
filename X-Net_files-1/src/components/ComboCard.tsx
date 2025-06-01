import  { FileText, ThumbsUp, Star } from 'lucide-react';
import { BeybladeCombo } from '../types';

interface ComboCardProps {
  combo: BeybladeCombo;
}

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-white mb-2">{combo.name}</h3>
          <div className="flex items-center text-xs text-gray-400">
            <Star className="h-4 w-4 text-xblue-500 mr-1" />
            <span>{combo.wins} wins</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-gray-800 p-2 rounded text-sm">
            <span className="block text-gray-400 text-xs">Blade</span>
            <span className="font-medium">{combo.blade}</span>
          </div>
          <div className="bg-gray-800 p-2 rounded text-sm">
            <span className="block text-gray-400 text-xs">Ratchet</span>
            <span className="font-medium">{combo.ratchet}</span>
          </div>
          <div className="bg-gray-800 p-2 rounded text-sm">
            <span className="block text-gray-400 text-xs">Bit</span>
            <span className="font-medium">{combo.bit}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {combo.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-black text-xblue-400 rounded-full border border-xblue-800">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>W: {combo.wins} / L: {combo.losses}</span>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            <span>{new Date(combo.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 