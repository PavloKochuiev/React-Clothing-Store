export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string;
  count?: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
