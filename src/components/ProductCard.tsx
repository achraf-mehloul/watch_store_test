import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-amber-500/10 hover:border-amber-500/30"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

        <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          NEW
        </div>

        <div className="absolute bottom-3 left-3 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>
      </div>

      <div className="p-5">
        <p className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-amber-500 text-2xl font-bold">
              {product.price.toLocaleString('fr-DZ')}
            </span>
            <span className="text-slate-400 text-sm ml-1">DA</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
