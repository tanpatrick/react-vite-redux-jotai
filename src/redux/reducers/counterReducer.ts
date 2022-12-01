import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  [key: string]: number;
};

const initialState: CounterState = {};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrease: (state, action) => {
      const { payload } = action;
      const current = state[payload] || 0;
      state[payload] = current - 1;
    },
    increase: (state, action) => {
      const { payload } = action;
      const current = state[payload] || 0;
      state[payload] = current + 1;
    },
  },
});

export const counterActions = slice.actions;

export default slice.reducer;
