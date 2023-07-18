import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})