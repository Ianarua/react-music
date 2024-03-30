import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100,
    },
    reducers: {
        changeMessageAction (state, { payload }: PayloadAction<number>) {
            state.count = payload;
        }
    }
});

export const { changeMessageAction } = counterSlice.actions;

export default counterSlice.reducer;