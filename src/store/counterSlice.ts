import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  totalValue: number;
  successValue: number;
  failedValue: number;
}

const initialState: CounterState = {
  totalValue: 0,
  successValue: 0,
  failedValue: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    success: state => {
      state.totalValue += 1;
      state.successValue += 1;
    },
    failed: state => {
      state.totalValue += 1;
      state.failedValue += 1;
    },
    reset: state => {
      state.failedValue = 0;
      state.successValue = 0;
      state.totalValue = 0;
    },
  },
});

export const {success, failed, reset} = counterSlice.actions;

export default counterSlice.reducer;
