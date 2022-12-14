import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import apiReducer, { ApiState } from './reducers/apiReducer';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useApiSelector = <T>(key: string) => {
  return useAppSelector((state) => state.api.data[key] || {}) as ApiState<T>;
};

export const useApiErrorSelector = () => {
  return useAppSelector((state) => state.api.error);
};
