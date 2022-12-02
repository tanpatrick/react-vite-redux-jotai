import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import counterReducer from './reducers/counterReducer';
import feedsReducer from './reducers/feedReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    counterReducer,
    feedsReducer,
    usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
