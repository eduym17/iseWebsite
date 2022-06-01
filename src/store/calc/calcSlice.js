/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoClient: { Entidad: 'Seleccione una entidad' },
};

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    addInfoClient: (state, action) => {
      state.infoClient = { ...state.infoClient, ...action.payload };
    },
  },
});

export const { addInfoClient } = calcSlice.actions;

export default calcSlice.reducer;
