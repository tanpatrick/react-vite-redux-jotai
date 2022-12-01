import { createSlice } from '@reduxjs/toolkit';
import { Feed } from '../../components/Feed';
import { counterActions } from './counterReducer';

type FeedState = {
  feeds: Feed[];
};

const initialState: FeedState = {
  feeds: [],
};

const slice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(counterActions.decrease, (state, { payload }) => {
        state.feeds = [
          {
            actionType: 'decrease',
            name: payload,
            timestamp: new Date().toISOString(),
          },
          ...state.feeds,
        ];
      })
      .addCase(counterActions.increase, (state, { payload }) => {
        state.feeds = [
          {
            actionType: 'increase',
            name: payload,
            timestamp: new Date().toISOString(),
          },
          ...state.feeds,
        ];
      })
      .addCase(counterActions.undo, (state) => {
        state.feeds = state.feeds.slice(1, state.feeds.length);
      });
  },
});

export default slice.reducer;
