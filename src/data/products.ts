import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Elegance',
    price: 15999,
    brand: 'Ash Collection',
    images: [
      'products/watch1.jpg',
      'products/watch2.jpg',
      'products/watch3.jpg'
    ],
    shortDescription: 'Timeless sophistication with premium leather strap',
    description: 'Experience luxury with our Classic Elegance timepiece...',
    inStock: true
  },
  {
    id: '2',
    name: 'Sport Master',
    price: 12999,
    brand: 'Ash Pro',
    images: [
      'products/watch2.jpg',
      'products/watch1.jpg',
      'products/watch3.jpg'
    ],
    shortDescription: 'Durable sports watch with chronograph function',
    description: 'Built for performance and style...',
    inStock: true
  },
  {
    id: '3',
    name: 'Golden Hour',
    price: 24999,
    brand: 'Ash Luxury',
    images: [
      'products/watch3.jpg',
      'products/watch2.jpg',
      'products/watch1.jpg'
    ],
    shortDescription: 'Premium gold-plated luxury timepiece',
    description: 'Elevate your style with this exquisite gold-plated masterpiece...',
    inStock: true
  },
  {
    id: '4',
    name: 'Midnight Black',
    price: 13499,
    brand: 'Ash Collection',
    images: [
      'products/watch4.jpg',
      'products/watch6.jpg',
      'products/watch5.jpg'
    ],
    shortDescription: 'Sleek all-black minimalist design',
    description: 'Minimalist perfection in jet black...',
    inStock: true
  },
  {
    id: '5',
    name: 'Ocean Diver',
    price: 18999,
    brand: 'Ash Pro',
    images: [
      'products/watch5.jpg',
      'products/watch5.jpg',
      'products/watch5.jpg'
    ],
    shortDescription: 'Professional diving watch 200m water-resistant',
    description: 'Professional dive watch with unidirectional rotating bezel...',
    inStock: true
  },
  {
    id: '6',
    name: 'Rose Prestige',
    price: 21999,
    brand: 'Ash Luxury',
    images: [
      'products/watch6.jpg',
      'products/watch6.jpg',
      'products/watch6.jpg'
    ],
    shortDescription: 'Elegant rose gold with diamond accents',
    description: 'Luxury meets elegance with rose gold finish and diamond hour markers...',
    inStock: true
  }
];
