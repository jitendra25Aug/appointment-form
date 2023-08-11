import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user_slice";

export const store = configureStore({
    reducer: { user: userSlice.reducer }
});