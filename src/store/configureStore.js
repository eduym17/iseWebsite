import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './calc/calcSlice';

const store = configureStore({
  reducer: {
    calc: calcReducer,
  },
});

export default store;
