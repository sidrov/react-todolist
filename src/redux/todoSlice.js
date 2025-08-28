import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { add } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;