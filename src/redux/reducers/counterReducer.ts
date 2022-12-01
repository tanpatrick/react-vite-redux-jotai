import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  actionType?: 'increase' | 'decrease';
  counters: { [key: string]: number };
};

const initialState: CounterState = {
  counters: {},
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrease: (state, action) => {
      const { payload } = action;
      const current = state.counters[payload] || 0;
      state.counters[payload] = current - 1;
      state.actionType = 'decrease';
    },
    increase: (state, action) => {
      const { payload } = action;
      const current = state.counters[payload] || 0;
      state.counters[payload] = current + 1;
      state.actionType = 'increase';
    },
    undo: (state, action) => {
      const { payload } = action;

      if (state.actionType === 'decrease') {
        state.counters[payload] = state.counters[payload] + 1;
      } else if (state.actionType === 'increase') {
        state.counters[payload] = state.counters[payload] - 1;
      }
    },
  },
});

export const counterActions = slice.actions;

export default slice.reducer;
