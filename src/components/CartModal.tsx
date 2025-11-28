import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  onClose: () => void;
  onCheckout: () => void;
}

export function CartModal({ onClose, onCheckout }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    if (cart.length > 0) {
      onCheckout();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-amber-500/20">
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-amber-500/20">
          <div>
            <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
            <p className="text-slate-400 text-sm">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-24 h-24 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-400 text-lg">Your cart is empty</p>
              <p className="text-slate-500 text-sm mt-2">Add some luxury watches to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-slate-800/50 rounded-xl p-4 flex items-center space-x-4 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-white font-bold">{item.product.name}</h3>
                    <p className="text-amber-500 text-sm">{item.product.brand}</p>
                    <p className="text-slate-300 font-semibold mt-1">
                      {item.product.price.toLocaleString('fr-DZ')} DA
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="bg-amber-600 hover:bg-amber-500 text-white p-2 rounded-lg transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-400 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-amber-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 text-lg">Total</span>
              <div className="text-right">
                <div className="text-amber-500 text-3xl font-bold">
                  {totalPrice.toLocaleString('fr-DZ')} DA
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
