import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100,
    },
    reducers: {
        changeMessageAction (state, {payload}) {
            state.count = payload;
        }
    }
});

export const {changeMessageAction} = counterSlice.actions;

export default counterSlice.reducer;