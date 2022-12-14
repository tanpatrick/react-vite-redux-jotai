import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit';
import { queryClient } from '../../App';

export const getEmployeesApi = async () => {
  await waitForInSeconds(5);
  const json = await (await fetch('https://dummy.restapiexample.com/api/v1/employees')).json();
  return json.data;
};

export const getUserByIdApi = async (id: number) => {
  await waitForInSeconds(10);
  const json = await (await fetch('https://reqres.in/api/users/' + id)).json();
  return json.data;
};

export const getUsersApi = async () => {
  await waitForInSeconds(10);
  const json = await (await fetch('https://reqres.in/api/users')).json();
  return json.data;
};

function waitForInSeconds(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, 1000);
  });
}

type DispatchActionPayload = {
  apiFn: () => void;
  apiKey: string;
  queryKey: string | any[];
  errorHander?: {
    delegateToGlobal?: boolean;
  };
};

interface ReturnActionPayload<T = any> {
  apiKey: string;
  data: T;
}

type RejectValue = {
  errorCode: string;
  errorMessage: string;
};

type ThunkAPI = {
  rejectValue: RejectValue;
};

export const apiAction = createAsyncThunk<ReturnActionPayload, DispatchActionPayload, ThunkAPI>(
  'apiGetAction',
  async (arg, thunkAPI) => {
    const { apiFn, apiKey, queryKey } = arg;
    try {
      const data = await queryClient.fetchQuery([queryKey], () => apiFn());
      return { apiKey, data };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        errorCode: 'ERROR_CODE',
        errorMessage: 'Whoops! Something went wrong!',
      });
    }
  }
);

type ApiError = {
  code: string;
  message: string;
};

export interface ApiState<T = any> {
  data?: T;
  isFailed?: boolean;
  isFetched?: boolean;
  isFetching?: boolean;
  loadingState: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: ApiError;
}

interface RootApiState {
  data: {
    [key: string]: ApiState;
  };
  error?: ApiError;
}

const initialState = { data: {} } as RootApiState;

const slice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiAction.pending, (state, action) => {
        state.data[action.meta.arg.apiKey] = {
          loadingState: 'pending',
          isFetching: true,
        };
      })
      .addCase(apiAction.fulfilled, (state, action) => {
        state.data[action.payload.apiKey] = {
          data: action.payload.data,
          loadingState: 'succeeded',
          isFetched: true,
          isFetching: false,
        };

        return state;
      })
      .addCase(apiAction.rejected, (state, action) => {
        const error: ApiError = {
          code: action.payload?.errorCode || 'UNKNOWN_ERROR_CODE',
          message: action.payload?.errorMessage || 'Unknown error',
        };

        if (action.meta.arg.errorHander?.delegateToGlobal) {
          state.error = error;
        }

        state.data[action.meta.arg.apiKey] = {
          error,
          isFailed: true,
          isFetching: false,
          loadingState: 'failed',
        };
      });
  },
});

export default slice.reducer;
