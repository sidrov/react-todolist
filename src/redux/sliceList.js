
import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";

export default sliceListConfig({
    reducer: {
        todoList: todoSlice,
        todoListDone: todo
    }
});