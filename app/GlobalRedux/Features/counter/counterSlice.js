import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isCartOpen: [],
  items: [],
  cart:[],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: ( state, action) => {
      state.items = action.payload;
    },

    addToCart: ( state, action ) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: ( state, action ) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item
      })
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item
      })
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
      console.log(setIsCartOpen)
    },

    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { increment, decrement, incrementByAmount, addItem, removeItem, clearCart, setItems, addToCart, removeFromCart, increaseCount, decreaseCount, setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;