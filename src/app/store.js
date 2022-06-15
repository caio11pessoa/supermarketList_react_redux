import { configureStore } from '@reduxjs/toolkit';
import supermarketListReducer from '../features/supermarketList/supermarketListSlice';

export const store = configureStore({
  reducer: {
    supermarketList: supermarketListReducer,
  },
});
