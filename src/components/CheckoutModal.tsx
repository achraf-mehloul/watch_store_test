import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutForm } from '../types';
import { wilayas } from '../data/wilayas';

interface CheckoutModalProps {
  onClose: () => void;
}

export function CheckoutModal({ onClose }: CheckoutModalProps) {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    phone: '',
    wilaya: '',
    commune: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 9) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      clearCart();
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 2000);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.phone.length === 9 &&
      formData.wilaya !== '' &&
      formData.commune.trim() !== ''
    );
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl max-w-md w-full p-8 border border-amber-500/20 text-center">
          <div className="mb-6">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
          <p className="text-slate-300 mb-2">Thank you for your purchase</p>
          <p className="text-amber-500 font-semibold">We will contact you shortly</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full my-8 border border-amber-500/20">
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-amber-500/20 rounded-t-3xl">
          <h2 className="text-2xl font-bold text-white">Checkout</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <h3 className="text-white text-lg font-bold mb-4">Order Summary</h3>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-amber-500/10 space-y-2">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-slate-300">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="text-amber-500 font-semibold">
                    {(item.product.price * item.quantity).toLocaleString('fr-DZ')} DA
                  </span>
                </div>
              ))}
              <div className="border-t border-slate-700 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span className="text-white text-lg">Total</span>
                  <span className="text-amber-500 text-xl">
                    {getTotalPrice().toLocaleString('fr-DZ')} DA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Delivery Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all duration-300"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all duration-300"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">
                Phone Number *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 bg-slate-800 border border-r-0 border-slate-700 rounded-l-lg text-amber-500 font-semibold">
                  +213
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={9}
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-r-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all duration-300"
                  placeholder="555 123 456"
                />
              </div>
              <p className="text-slate-500 text-xs mt-1">9 digits required</p>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">
                Wilaya *
              </label>
              <select
                name="wilaya"
                value={formData.wilaya}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="">Select Wilaya</option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya.code} value={wilaya.name}>
                    {wilaya.code} - {wilaya.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2">
                Commune *
              </label>
              <input
                type="text"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all duration-300"
                placeholder="Enter commune"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full mt-6 font-bold py-4 rounded-xl shadow-lg transform transition-all duration-300 ${
              isFormValid()
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white hover:scale-105'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
