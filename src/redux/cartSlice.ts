import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: number;
  quantity: number;
}

const MAX_QUANTITY_PER_PRODUCT = 10;

const initialState: CartItem[] = [{productId: 1, quantity: 5}, {productId: 5, quantity: 3}, {productId: 3, quantity: 1}];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItemIndex = state.findIndex(item => item.productId === productId);
      
       if (existingItemIndex !== -1) {
        const existingItem = state[existingItemIndex];
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= MAX_QUANTITY_PER_PRODUCT) {
          state[existingItemIndex].quantity = newQuantity;
        } else {
          throw new Error(`You cannot add more than ${MAX_QUANTITY_PER_PRODUCT} units of this product.`);
        }
      } else {
        if (quantity <= MAX_QUANTITY_PER_PRODUCT) {
          state.push({ productId, quantity });
        } else {
          throw new Error(`You cannot add more than ${MAX_QUANTITY_PER_PRODUCT} units of this product.`);
        }
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
