// Ducks Pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
  value: 0,  
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
       incremented(state) {
            state.value++;
       },
       amounAdded(state, acrtion: PayloadAction<number>) {
            state.value += acrtion.payload
       }
    }
})

export const { incremented, amounAdded } =counterSlice.actions;
export default counterSlice.reducer; 