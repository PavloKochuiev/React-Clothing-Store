import { RootState } from '../store';

export const cartSelector = (state: RootState) => state.cartSlice;

export const cartSelectorItemByid = (id: string) => (state: RootState) =>
  // @ts-ignore
  state.cartSlice.items.find((obj) => obj.id === id);
