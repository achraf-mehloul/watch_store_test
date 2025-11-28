import { useState } from 'react';
import { X, ShoppingCart, ChevronLeft, ChevronRight, Star, Shield, Truck, Award } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/20">
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-amber-500/20">
          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 shadow-2xl mb-4">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? 'bg-amber-500 w-8'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === currentImageIndex
                        ? 'border-amber-500 shadow-lg shadow-amber-500/50'
                        : 'border-slate-700 hover:border-amber-500/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-slate-400 text-sm ml-2">(4.9/5)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-amber-500 text-4xl font-bold">
                    {product.price.toLocaleString('fr-DZ')}
                  </span>
                  <span className="text-slate-400 text-lg">DA</span>
                </div>
                <p className="text-green-500 text-sm font-semibold">✓ In Stock - Fast Delivery</p>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-lg font-bold mb-3">Description</h3>
                <p className="text-slate-300 leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-amber-500/10">
                  <Shield className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                  <p className="text-white text-xs font-semibold">2 Years</p>
                  <p className="text-slate-400 text-xs">Warranty</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-amber-500/10">
                  <Truck className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                  <p className="text-white text-xs font-semibold">Fast</p>
                  <p className="text-slate-400 text-xs">Delivery</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-amber-500/10">
                  <Award className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                  <p className="text-white text-xs font-semibold">Premium</p>
                  <p className="text-slate-400 text-xs">Quality</p>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
