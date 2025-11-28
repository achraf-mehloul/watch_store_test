import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* اللوقو كصورة مدورة */}
              <img 
                src="/logo.png" 
                alt="Ash Store Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
              />
              <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full group-hover:bg-amber-500/30 transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
                Ash Store
              </h1>
              <p className="text-xs text-amber-500/80 tracking-widest uppercase">Luxury Timepieces</p>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
