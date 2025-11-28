export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  shortDescription: string;
  brand: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  phone: string;
  wilaya: string;
  commune: string;
}
