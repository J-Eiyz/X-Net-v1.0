import  Navbar from '../components/Navbar';
import ComboCard from '../components/ComboCard';
import ComboForm from '../components/ComboForm';
import { mockCombos } from '../data/mockData';

export default function CombosPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Combo Form */}
          <div>
            <ComboForm />
          </div>
          
          {/* Right - Combo List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Your Combos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockCombos.map(combo => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 