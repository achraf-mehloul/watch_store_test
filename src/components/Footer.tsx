import { Watch, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Watch className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Ash Store</h3>
                <p className="text-xs text-amber-500/80 tracking-widest uppercase">Luxury Timepieces</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Your destination for premium luxury watches. We bring you the finest collection of timepieces that combine elegance, precision, and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/a._.coding/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-amber-500 text-slate-400 hover:text-white p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17vGkN7myK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-amber-500 text-slate-400 hover:text-white p-3 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-slate-400 hover:text-amber-500 transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-400">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>+213 555 123 456</span>
              </li>
              <li className="flex items-start space-x-2 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>contact@ashstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Ash Store. All rights reserved. Crafted with passion for luxury timepieces.
          </p>
        </div>
      </div>
    </footer>
  );
}
