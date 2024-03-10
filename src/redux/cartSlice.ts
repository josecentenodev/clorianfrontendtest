import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: number;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.find(item => item.productId === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ productId, quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
        const productIdToRemove = action.payload;
        return state.filter(item => item.productId !== productIdToRemove);
      },
      clearCart() {
        return initialState;
      },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
