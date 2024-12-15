import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        state.totalQuantity -= state.cartItems[index].quantity;
        state.cartItems.splice(index, 1);
      }
    },
    calculateTotals: (state) => {
      let total = 0;
      let quantity = 0;

      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        quantity += item.quantity;
      });

      state.totalAmount = total;
      state.totalQuantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
