import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryClient } from '../../App';

export const fetchUsersApi = async () => await (await (await fetch('https://reqres.in/api/users')).json()).data;

function waitForInSeconds(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, seconds * 1000);
  });
}

export const fetchUsersAction = createAsyncThunk('data/fetchUsers', async () => {
  const data = await queryClient.fetchQuery(['users'], () => fetchUsersApi());

  // simulate api delay
  await waitForInSeconds(5);

  return data;
});

export type User = {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
};
export type UserResult = {
  page?: number;
  per_page?: number;
  data?: User[];
};

interface UsersState {
  entities: User[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isLoading: boolean;
}

const initialState = {
  entities: [],
  loading: 'idle',
  isLoading: true,
} as UsersState;

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.entities = action.payload;

        state.loading = 'succeeded';
        state.isLoading = false;
      })
      .addCase(fetchUsersAction.rejected, (state) => {
        state.loading = 'failed';
        state.isLoading = false;
      });
  },
});

export default slice.reducer;
