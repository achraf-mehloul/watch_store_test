import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartModal } from './components/CartModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950">
        <Header onCartClick={handleCartClick} />

        <Hero />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="products">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our curated selection of premium timepieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </main>

        <Footer />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseProduct}
          />
        )}

        {showCart && (
          <CartModal
            onClose={handleCloseCart}
            onCheckout={handleCheckout}
          />
        )}

        {showCheckout && (
          <CheckoutModal onClose={handleCloseCheckout} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
